import type { ImageFilter, ThemeImage } from "@/types";

const format = (n: number) => Number(n.toFixed(4));

const componentTransfer = (func: string) =>
	`<feComponentTransfer>${["R", "G", "B"].map((c) => `<feFunc${c} ${func}/>`).join("")}</feComponentTransfer>`;

// Primitives follow the CSS filter function definitions from the
// Filter Effects spec, so each key renders like its CSS counterpart
const primitives: Record<keyof ImageFilter, (value: number) => string> = {
	blur: (px) => `<feGaussianBlur stdDeviation="${format(px)}"/>`,
	brightness: (b) => componentTransfer(`type="linear" slope="${format(b)}"`),
	contrast: (c) =>
		componentTransfer(
			`type="linear" slope="${format(c)}" intercept="${format(0.5 - 0.5 * c)}"`,
		),
	grayscale: (a) =>
		`<feColorMatrix type="saturate" values="${format(1 - Math.min(a, 1))}"/>`,
	hueRotate: (deg) =>
		`<feColorMatrix type="hueRotate" values="${format(deg)}"/>`,
	invert: (a) =>
		componentTransfer(
			`type="table" tableValues="${format(a)} ${format(1 - a)}"`,
		),
	opacity: (o) =>
		`<feComponentTransfer><feFuncA type="table" tableValues="0 ${format(o)}"/></feComponentTransfer>`,
	saturate: (s) => `<feColorMatrix type="saturate" values="${format(s)}"/>`,
	sepia: (a) => {
		const k = 1 - Math.min(a, 1);
		const matrix = [
			[0.393 + 0.607 * k, 0.769 - 0.769 * k, 0.189 - 0.189 * k],
			[0.349 - 0.349 * k, 0.686 + 0.314 * k, 0.168 - 0.168 * k],
			[0.272 - 0.272 * k, 0.534 - 0.534 * k, 0.131 + 0.869 * k],
		];
		const values = matrix
			.map((row) => [...row.map(format), 0, 0].join(" "))
			.concat("0 0 0 1 0")
			.join(" ");

		return `<feColorMatrix type="matrix" values="${values}"/>`;
	},
};

export const createSvgFilter = (id: string, filter: ImageFilter) => {
	const body = Object.entries(filter)
		.map(([key, value]) => primitives[key as keyof ImageFilter](value))
		.join("");

	return `<filter id="${id}" color-interpolation-filters="sRGB">${body}</filter>`;
};

type ThemedImageProps = {
	id: string;
	src: string;
	alt: string;
	width: number;
	height: number;
	className: string;
	image: ThemeImage;
};

// CSS filters on an <img> inside a foreignObject get painted in their own
// layer, which WebKit (Safari, GitHub's iOS app) misplaces when the SVG is
// scaled. Filtered images are drawn as SVG <image> elements instead
export const createThemedImage = ({
	id,
	src,
	alt,
	width,
	height,
	className,
	image,
}: ThemedImageProps) => {
	if (!image.filter && !image.darkFilter) {
		return `<img src="${src}" class="${className} ${image.border}" alt="${alt}" />`;
	}

	const variants = [
		{
			key: "light",
			filter: image.filter,
			visibility: image.darkFilter ? "dark:hidden" : "",
		},
		{ key: "dark", filter: image.darkFilter, visibility: "hidden dark:inline" },
	].filter((variant) => variant.key === "light" || variant.filter);

	const defs = variants
		.filter((variant) => variant.filter)
		.map((variant) =>
			createSvgFilter(`${id}-${variant.key}`, variant.filter as ImageFilter),
		)
		.join("");

	const images = variants
		.map(
			(variant) =>
				`<image href="${src}" width="${width}" height="${height}" preserveAspectRatio="xMidYMid slice" class="${variant.visibility}"${
					variant.filter ? ` filter="url(#${id}-${variant.key})"` : ""
				}/>`,
		)
		.join("");

	return `<div class="${className} ${image.border} overflow-hidden" role="img" aria-label="${alt}"><svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" style="display:block"><defs>${defs}</defs>${images}</svg></div>`;
};

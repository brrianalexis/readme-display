import { createSvgFilter, createThemedImage } from "../image";

const baseProps = {
	id: "cover",
	src: "data:image/png;base64,AA==",
	alt: "Album cover",
	width: 80,
	height: 80,
	className: "w-[80px] h-[80px]",
};

describe("image svg utils", () => {
	describe("createSvgFilter", () => {
		it("should render primitives in the order the filter keys are declared", () => {
			const filter = createSvgFilter("f", {
				sepia: 0.4,
				hueRotate: -10,
				contrast: 1.5,
			});

			const sepia = filter.indexOf('type="matrix"');
			const hueRotate = filter.indexOf('type="hueRotate" values="-10"');
			const contrast = filter.indexOf('slope="1.5" intercept="-0.25"');

			expect(sepia).toBeGreaterThan(-1);
			expect(hueRotate).toBeGreaterThan(sepia);
			expect(contrast).toBeGreaterThan(hueRotate);
		});

		it("should map each CSS filter function to its SVG primitive", () => {
			const filter = createSvgFilter("f", {
				blur: 0.5,
				brightness: 0.75,
				grayscale: 1,
				invert: 1,
				opacity: 0.9,
				saturate: 1.2,
			});

			expect(filter).toContain('<feGaussianBlur stdDeviation="0.5"/>');
			expect(filter).toContain('<feFuncR type="linear" slope="0.75"/>');
			expect(filter).toContain('<feColorMatrix type="saturate" values="0"/>');
			expect(filter).toContain('<feFuncR type="table" tableValues="1 0"/>');
			expect(filter).toContain('<feFuncA type="table" tableValues="0 0.9"/>');
			expect(filter).toContain('<feColorMatrix type="saturate" values="1.2"/>');
		});

		it("should use sRGB like CSS filters do", () => {
			expect(createSvgFilter("f", { grayscale: 1 })).toContain(
				'color-interpolation-filters="sRGB"',
			);
		});
	});

	describe("createThemedImage", () => {
		it("should render a plain img when the theme has no filter", () => {
			const image = createThemedImage({
				...baseProps,
				image: { border: "rounded-lg" },
			});

			expect(image).toBe(
				`<img src="${baseProps.src}" class="w-[80px] h-[80px] rounded-lg" alt="Album cover" />`,
			);
		});

		it("should render an SVG image with the filter applied", () => {
			const image = createThemedImage({
				...baseProps,
				image: { border: "border", filter: { grayscale: 1 } },
			});

			expect(image).not.toContain("<img");
			expect(image).toContain('<filter id="cover-light"');
			expect(image).toContain('filter="url(#cover-light)"');
			expect(image).toContain('aria-label="Album cover"');
		});

		it("should swap images by color scheme when there is a dark filter", () => {
			const image = createThemedImage({
				...baseProps,
				image: {
					border: "border",
					filter: { saturate: 0.9 },
					darkFilter: { sepia: 0.15 },
				},
			});

			expect(image).toContain('class="dark:hidden" filter="url(#cover-light)"');
			expect(image).toContain(
				'class="hidden dark:inline" filter="url(#cover-dark)"',
			);
		});
	});
});

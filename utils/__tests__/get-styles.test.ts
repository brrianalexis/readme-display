import fs from "node:fs/promises";
import path from "node:path";

import { getStyles } from "../get-styles";

vi.mock("node:fs/promises", () => ({
	default: {
		readFile: vi.fn(),
	},
}));

describe("getStyles", () => {
	beforeEach(() => {
		vi.spyOn(path, "join").mockReturnValue("/fake/path/output.css");
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("should read and append bar animations to CSS", async () => {
		const mockCSS = ".some-class { color: red; }";
		vi.mocked(fs.readFile).mockResolvedValue(mockCSS);

		const styles = await getStyles();

		expect(styles).toContain(mockCSS);
		expect(styles).toContain(".bar:nth-child(1)");
		expect(styles).toContain(".bar:nth-child(84)");
		expect(styles).toMatch(/animation-duration: \d+ms/);
	});

	it("should handle file read errors", async () => {
		vi.mocked(fs.readFile).mockRejectedValue(new Error("File not found"));

		await expect(getStyles()).rejects.toThrow("File not found");
	});
});

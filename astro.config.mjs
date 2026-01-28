import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

/** @type {import('rehype-pretty-code').Options} */
const rehypePrettyCodeOptions = {
  theme: "dark-plus",
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    // Each line node by default has `class="line"`.
    node.properties.className.push("line--highlighted");
  },
  onVisitHighlightedWord(node, id) {
    // Each word node has no className by default.
    node.properties.className = ["word"];
    if (id) {
      const backgroundColor = {
        a: "rgb(196 42 94 / 59%)",
        b: "rgb(0 103 163 / 56%)",
        c: "rgb(100 50 255 / 35%)",
      }[id];

      const color = {
        a: "rgb(255 225 225 / 100%)",
        b: "rgb(175 255 255 / 100%)",
        c: "rgb(225 200 255 / 100%)",
      }[id];
      if (node.properties["data-rehype-pretty-code-wrapper"]) {
        node.children.forEach((childNode) => {
          childNode.properties.style = ``;
          childNode.properties.className = "";
        });
      }
      node.properties.style = `background-color: ${backgroundColor}; color: ${color};`;
    }
  },
};

export default defineConfig({
  site: "https://alastair-smith2.github.io",
  integrations: [
    tailwind(),
    mdx(),
  ],
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeAutolinkHeadings,
      [rehypePrettyCode, rehypePrettyCodeOptions],
    ],
  },
});

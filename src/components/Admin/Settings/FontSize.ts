// components/Admin/Settings/Extensions/FontSize.ts
import { Mark, mergeAttributes } from "@tiptap/core";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    fontSize: {
      setFontSize: (size: string | null) => ReturnType;
      unsetFontSize: () => ReturnType;
    };
  }
}

const FontSize = Mark.create({
  name: "fontSize", // <<< IMPORTANT: the mark name used everywhere

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  addAttributes() {
    return {
      size: {
        default: null,
        parseHTML: (element) => {
          if (!(element instanceof HTMLElement)) return null;
          const s = element.style.fontSize;
          return s || null;
        },
        renderHTML: (attrs) => {
          if (!attrs.size) return {};
          return {
            style: `font-size: ${attrs.size}`,
          };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "span[style]",
        getAttrs: (node) => {
          const el = node as HTMLElement;
          const fs = el.style.fontSize;
          return fs ? { size: fs } : false;
        },
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["span", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },

  addCommands() {
    return {
      setFontSize:
        (size) =>
        ({ chain }) => {
          if (!size) return chain().unsetMark(this.name).run();
          return chain().setMark(this.name, { size }).run();
        },
      unsetFontSize:
        () =>
        ({ chain }) => {
          return chain().unsetMark(this.name).run();
        },
    };
  },
});

export default FontSize;

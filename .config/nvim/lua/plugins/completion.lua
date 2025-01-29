return {
  {
    "saghen/blink.cmp",
    dependencies = "rafamadriz/friendly-snippets",

    version = "v0.*",

    opts = {
      completion = {
        ghost_text = {
          enabled = false,
        },
        menu = {
          draw = {
            columns = { { "kind_icon" }, { "label", "label_description", gap = 1 }, { "kind" } },
            treesitter = { "lsp" },
          },
        },

        documentation = {
          auto_show = true,
          auto_show_delay_ms = 500,
        },
      },

      keymap = {
        preset = "default",

        ["<Tab>"] = {
          function(cmp)
            if cmp.snippet_active() then
              return cmp.accept()
            else
              return cmp.select_and_accept()
            end
          end,
          "snippet_forward",
          "fallback",
        },

        ["<S-Tab>"] = { "snippet_backward", "fallback" },
      },

      appearance = {
        use_nvim_cmp_as_default = true,
        nerd_font_variant = "mono",
      },

      signature = { enabled = true },
    },
  },
}

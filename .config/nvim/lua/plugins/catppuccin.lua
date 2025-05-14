return {
    {
        enabled = true,
        "catppuccin/nvim",
        name = "catppuccin",
        config = function()
            require("catppuccin").setup({
                flavour = "mocha",
                default_integrations = false,
                integrations = {
                    blink_cmp = true,
                    mason = true,
                    harpoon = true,
                    nvimtree = true,
                    treesitter = true,
                    telescope = { enabled = true },
                    which_key = true,
                    native_lsp = {
                        enabled = true,
                        virtual_text = {
                            errors = { "italic" },
                            hints = { "italic" },
                            warnings = { "italic" },
                            information = { "italic" },
                            ok = { "italic" },
                        },
                        underlines = {
                            errors = { "underline" },
                            hints = { "underline" },
                            warnings = { "underline" },
                            information = { "underline" },
                            ok = { "underline" },
                        },
                        inlay_hints = {
                            background = true,
                        },
                    },
                },
            })
        end,
    },
}

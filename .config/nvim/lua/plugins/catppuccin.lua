return {
    {
        enabled = true,
        "catppuccin/nvim",
        name = "catppuccin",
        priority = 1000,
        config = function()
            require("catppuccin").setup({
                flavour = "mocha",
                auto_integrations = true,
                integrations = {
                    blink_cmp = { style = "bordered" },
                    dashboard = true,
                    gitsigns = true,
                    harpoon = true,
                    mason = true,
                    nvimtree = true,
                    telescope = { enabled = true },
                    treesitter = true,
                    which_key = true,
                },
            })
        end,
    },
}

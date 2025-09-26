return {
    {
        "neovim/nvim-lspconfig",
        dependencies = { "saghen/blink.cmp" },
        opts = {
            servers = {
                lua_ls = require('config.lsp.lua_ls'),
                ccls = {},
                -- html = {},
                pylsp = {},
                cssls = {},
                angularls = require('config.lsp.angularls'),
                ts_ls = {},
                zls = {},
                csharp_ls = {},
                hyprls = {},
            },
        },
        config = function(_, opts)
            for server, config in pairs(opts.servers) do
                config.capabilities = require("blink.cmp").get_lsp_capabilities(config.capabilities)
                vim.lsp.config(server, config)
                vim.lsp.enable(server)
            end

        end,
    },
}

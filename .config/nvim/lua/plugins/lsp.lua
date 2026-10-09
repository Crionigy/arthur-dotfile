return {
    {
        "neovim/nvim-lspconfig",
        dependencies = { "saghen/blink.cmp" },
        opts = {
            servers = {
                lua_ls = require('config.lsp.lua_ls'),
                -- ccls = {},
                html = {
                    filetypes = { "html", "htmlangular", "razor" },
                },
                -- pylsp = {},
                cssls = {},
                angularls = {},
                ts_ls = {},
                eslint={},
                -- zls = {},
                csharp_ls = {},
                -- hyprls = {},
                emmet_language_server = {},
            },
        },
        config = function(_, opts)
            for server, config in pairs(opts.servers) do
                config.capabilities = require("blink.cmp").get_lsp_capabilities(config.capabilities)

                if server == "html" then
                    config.capabilities.textDocument.completion.completionItem.snippetSupport = true
                end

                vim.lsp.config(server, config)
                vim.lsp.enable(server)
            end

        end,
    },
}

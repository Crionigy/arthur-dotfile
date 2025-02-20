return {
  {
    "neovim/nvim-lspconfig",
    dependencies = {
      "saghen/blink.cmp",
      {
        "folke/lazydev.nvim",
        ft = "lua",
        opts = {
          library = {
            { path = "${3rd}/luv/library", words = { "vim%.uv" } },
          },
        },
      },
    },
    config = function()
      local capabilities = require("blink.cmp").get_lsp_capabilities()
      local lua_ls_conf = require("config.lsp.lua_ls")
      lua_ls_conf.capabilities = capabilities
      require("lspconfig").lua_ls.setup(lua_ls_conf)
      require("lspconfig").pylsp.setup({ capabilities = capabilities })
      require("lspconfig").html.setup({ capabilities = capabilities })
      require("lspconfig").cssls.setup({ capabilities = capabilities })
      require("lspconfig").ts_ls.setup({ capabilities = capabilities })
      require("lspconfig").zls.setup({ capabilities = capabilities })
      require("lspconfig").csharp_ls.setup({ capabilities = capabilities })
    end,
  },
}

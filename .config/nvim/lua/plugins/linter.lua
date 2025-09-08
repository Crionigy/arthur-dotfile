return {
    {
        enabled = false,
        "mfussenegger/nvim-lint",
        event = {
            "BufReadPre",
            "BufNewFile",
        },
        config = function(_, opts)
            local lint = require("lint")
            lint.linters_by_ft = {
                lua = { "luacheck" },
                javascript = { "eslint_d" },
                typescript = { "eslint_d" },
            }

            lint.linters.luacheck = {
                cmd = "luacheck",
                stdin = true,
                args = {
                    "--globals",
                    "vim",
                    "love",
                    "lvim",
                    "reload",
                    "--",
                },
                stream = "stdout",
                ignore_exitcode = true,
                parser = require("lint.parser").from_errorformat("%f:%l:%c: %m", {
                    source = "luacheck",
                }),
            }

            local lint_augroup = vim.api.nvim_create_augroup("lint", { clear = true })
            vim.api.nvim_create_autocmd({ "BufEnter", "BufWritePost", "InsertLeave" }, {
                group = lint_augroup,
                callback = function()
                    lint.try_lint()
                end,
            })
        end,
    },
}

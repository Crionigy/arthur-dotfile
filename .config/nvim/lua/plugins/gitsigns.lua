return {
    {
        enable = true,
        "lewis6991/gitsigns.nvim",
        config = function()
            require('gitsigns').setup {
                on_attach = function(bufnr)
                    local gitsigns = require('gitsigns')
                    local map = vim.keymap.set

                    -- Navigation
                    map('n', ']c', function()
                      if vim.wo.diff then
                        vim.cmd.normal({']c', bang = true})
                      else
                        gitsigns.nav_hunk('next')
                      end
                    end, {desc = "Next Hunk" })

                    map('n', '[c', function()
                      if vim.wo.diff then
                        vim.cmd.normal({'[c', bang = true})
                      else
                        gitsigns.nav_hunk('prev')
                      end
                    end, { desc = "Prev Hunk" })

                    -- Actions
                    map('n', '<leader>ghs', gitsigns.stage_hunk, { desc = 'Stage Hunk' })
                    map('n', '<leader>ghr', gitsigns.reset_hunk, { desc = 'Reset Hunk' })

                    map('v', '<leader>ghs', function()
                      gitsigns.stage_hunk({ vim.fn.line('.'), vim.fn.line('v') })
                    end, { desc = 'Stage selected Hunk' })

                    map('v', '<leader>hr', function()
                      gitsigns.reset_hunk({ vim.fn.line('.'), vim.fn.line('v') })
                    end, { desc = 'Stage selected Hunk' })

                    map('n', '<leader>ghS', gitsigns.stage_buffer, { desc = 'Stage Buffer' })
                    map('n', '<leader>ghR', gitsigns.reset_buffer, { desc = 'Reset Buffer' })
                    map('n', '<leader>ghp', gitsigns.preview_hunk, { desc = 'Preview Hunk' })
                    map('n', '<leader>ghi', gitsigns.preview_hunk_inline, { desc = 'Preview Inline Hunk' })

                    map('n', '<leader>ghb', function()
                      gitsigns.blame_line({ full = true })
                    end, { desc = 'Blame Line' })

                end
            }
        end,
    },
}


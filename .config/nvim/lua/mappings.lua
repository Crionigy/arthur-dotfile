require "nvchad.mappings"

-- add yours here

local map = vim.keymap.set

map("n", ";", ":", { desc = "CMD enter command mode" })
map("i", "jk", "<ESC>")

map("n", "<leader>rf", "<cmd>source %<CR>", { desc = "ARTHUR run current file" })
map("n", "<leader>rl", ":.lua<CR>", { desc = "ARTHUR run current line" })
map("v", "<leader>rl", ":lua<CR>", { desc = "ARTHUR run current selected line" })
map("n", "<leader>cp", function ()
  vim.opt.rtp:append(vim.fn.getcwd())
  vim.api.nvim_set_current_dir(vim.fn.getcwd())
end, { desc = "ARTHUR add cwd to runtimepath"})

-- Highlight when yanking
vim.api.nvim_create_autocmd('TextYankPost', {
  desc = 'Highlight when yanking (copying) text',
  group = vim.api.nvim_create_augroup('kickstart-highlight-yank', { clear = true }),
  callback = function()
    vim.highlight.on_yank()
  end
})

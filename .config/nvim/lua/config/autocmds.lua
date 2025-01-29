local create_cmd = vim.api.nvim_create_autocmd

create_cmd('TextYankPost', {
  desc = 'Highlight when yanking text',
  group = vim.api.nvim_create_augroup('kickstart-highlight-yank', { clear = true }),
  callback = function()
    vim.highlight.on_yank()
  end,
})

create_cmd('LspAttach', require("config.lsp.on_attach"))

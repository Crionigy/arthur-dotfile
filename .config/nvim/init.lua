require("config.lazy")
require("config.autocmds")
require("config.keymaps")
require("config.options")

vim.filetype.add({
  pattern = {
    ['.*%.component%.html'] = 'htmlangular',
    ['.*%.container%.html'] = 'htmlangular',
  },
})

vim.g.mapleader = " "

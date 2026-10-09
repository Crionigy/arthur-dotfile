local opt = vim.o

opt.termguicolors = true
opt.number = true
opt.relativenumber = false
opt.clipboard = "unnamedplus"
opt.cursorline = true
opt.cursorlineopt = "number"
opt.signcolumn = "number"
opt.splitright = true
opt.wrap = false

local cmd = vim.cmd
cmd.colorscheme("catppuccin-nvim")

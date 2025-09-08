local opt = vim.o

opt.termguicolors = true
opt.number = true
opt.relativenumber = true
opt.clipboard = "unnamedplus"
opt.cursorline = true
opt.cursorlineopt = "number"
opt.signcolumn = "number"
opt.splitright = true

local cmd = vim.cmd
cmd.colorscheme("catppuccin")

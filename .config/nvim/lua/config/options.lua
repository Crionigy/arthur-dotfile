local opt = vim.opt

opt.termguicolors = true
opt.number = true
opt.relativenumber = true
opt.clipboard = "unnamedplus"
opt.cursorline = true
opt.cursorlineopt = "number"
opt.signcolumn = "number"

local cmd = vim.cmd
cmd.colorscheme("catppuccin")

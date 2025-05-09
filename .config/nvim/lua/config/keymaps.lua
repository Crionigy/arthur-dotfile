local map = vim.keymap.set

-- Telescope
-- Open neovim config files
map("n", "<leader>fn", function()
    require("telescope.builtin").find_files({ cwd = vim.fn.stdpath("config") })
end, { desc = "telescope open neovim config files" })
map("n", "<leader>ff", "<cmd>Telescope find_files<cr>", { desc = "telescope find files" })
map("n", "<leader>fg", "<cmd>Telescope live_grep<CR>", { desc = "telescope live grep" })
map("n", "<leader>fb", "<cmd>Telescope buffers<CR>", { desc = "telescope find buffers" })
map("n", "<leader>fh", "<cmd>Telescope help_tags<CR>", { desc = "telescope help page" })
map("n", "<leader>ma", "<cmd>Telescope marks<CR>", { desc = "telescope find marks" })
map("n", "<leader>fo", "<cmd>Telescope oldfiles<CR>", { desc = "telescope find oldfiles" })
map("n", "<leader>fz", "<cmd>Telescope current_buffer_fuzzy_find<CR>", { desc = "telescope find in current buffer" })
map("n", "<leader>gt", "<cmd>Telescope git_status<CR>", { desc = "telescope git status" })

-- Moving arround Insert mode
map("i", "<C-b>", "<ESC>^i", { desc = "move beginning of line" })
map("i", "<C-e>", "<End>", { desc = "move end of line" })
map("i", "<C-h>", "<Left>", { desc = "move left" })
map("i", "<C-l>", "<Right>", { desc = "move right" })
map("i", "<C-j>", "<Down>", { desc = "move down" })
map("i", "<C-k>", "<Up>", { desc = "move up" })

-- Moving arround windows
map("n", "<C-h>", "<C-w>h", { desc = "switch window left" })
map("n", "<C-l>", "<C-w>l", { desc = "switch window right" })
map("n", "<C-j>", "<C-w>j", { desc = "switch window down" })
map("n", "<C-k>", "<C-w>k", { desc = "switch window up" })

-- Moving arround tabs
map("n", "<A-k>", "gt", { desc = "switch next tab" })
map("n", "<A-j>", "gT", { desc = "switch previous tab" })

-- Clear highlights
map("n", "<Esc>", "<cmd>noh<CR>", { desc = "general clear highlights" })

-- Comment
map("n", "<leader>/", "gcc", { desc = "toggle comment", remap = true })
map("v", "<leader>/", "gc", { desc = "toggle comment", remap = true })

-- NvimTree
map("n", "<C-n>", "<cmd>NvimTreeToggle<CR>", { desc = "nvimtree toggle window" })
map("n", "<leader>e", "<cmd>NvimTreeFocus<CR>", { desc = "nvimtree focus window" })

-- Escape terminal mode
map("t", "<esc><esc>", "<c-\\><c-n>", { desc = "general escape terminal mode" })

-- Toggle floating terminal
map({ "n", "t" }, "<leader>tt", ":Floaterminal<cr>", { desc = "general toggle floating terminal" })

-- Toggle line number & relative number
map("n", "<leader>n", "<cmd>set nu!<CR>", { desc = "general toggle line number" })
map("n", "<leader>rn", "<cmd>set rnu!<CR>", { desc = "general toggle relative number" })

-- Source lua files
map("n", "<leader>rf", "<cmd>source %<CR>", { desc = "general source the file" })
map("n", "<leader>rl", ":.lua<CR>", { desc = "general source current line" })
map("v", "<leader>rl", ":lua<CR>", { desc = "general source current selection" })

-- Save & copy file
map("n", "<C-s>", "<cmd>w<CR>", { desc = "general save file" })
map("n", "<C-c>", "<cmd>%y+<CR>", { desc = "general copy whole file" })

-- Enter cmd mode
map("n", ";", ":", { desc = "Enter cmd mode" })

-- Close current window
map("n", "<leader>x", ":wincmd c<CR>", { desc = "Close current window" })
-- Paste while in insert mode
map("i", "<C-p>", "<c-r>+", { desc = "general Paste while in insert mode" })

-- Format File
map("n", "<leader>fm", function()
    require("conform").format({ lsp_fallback = true })
end, { desc = "general Format file" })

-- Run Love2d
map("n", "<leader>slg", ":silent !love .<CR>", { desc = "custom Run game" })

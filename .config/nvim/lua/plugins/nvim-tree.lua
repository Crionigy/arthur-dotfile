return {
  "nvim-tree/nvim-tree.lua",
  version = "*",
  lazy = false,
  dependencies = {
    "nvim-tree/nvim-web-devicons",
  },
  config = function()
    require("nvim-tree").setup({
      filters = { dotfiles = false },
      filesystem_watchers = {
          enable = true,
          ignore_dirs = {
            "node_modules",
            ".git",
            ".vs",
            ".angular",
            "dist",
            "obj",
            ".vscode",
            "bin",
          }
      },
      git = {
        enable = true,
        timeout = 5000,
      },
      disable_netrw = true,
      hijack_cursor = true,
      sync_root_with_cwd = true,
      update_focused_file = {
        enable = true,
        update_root = false,
      },
      view = {
        width = 45,
        preserve_window_proportions = true,
      },
      renderer = {
        root_folder_label = false,
        highlight_git = "name",
        indent_markers = { enable = true },
        icons = {
          glyphs = {
            default = "󰈚",
            folder = {
              default = "",
              empty = "",
              empty_open = "",
              open = "",
              symlink = "",
            },
            git = { unmerged = "" },
          },
        },
      },
    })
  end,
}

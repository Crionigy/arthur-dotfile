local harpoon_config = {
    "harpoon2",
    indicators = { "h", "j", "k", "l" },
    active_indicators = { "H", "J", "K", "L" },
    color_active = { fg = "#00ff00" },
    _separator = " ",
    no_harpoon = "Harpoon not loaded",
}

local symbols = {
    modified = "",
    readonly = "󰏯",
    newfile = "󰎔",
}

local lint_progress = function()
  local linters = require("lint").get_running()
  if #linters == 0 then
      return "󰦕"
  end
  return "󱉶 " .. table.concat(linters, ", ")
end

return {
    {
        "nvim-lualine/lualine.nvim",
        dependencies = {
            "nvim-tree/nvim-web-devicons",
            "arkav/lualine-lsp-progress",
            "nvim-lua/lsp-status.nvim",
            "crionigy/lsp-client-name.nvim",
        },
        opts = {
            theme = "catppuccin",
            sections = {
                lualine_a = { "mode" },
                lualine_b = { { "filename", symbols = symbols }, "diagnostics" },
                lualine_c = { "branch", "diff", "lsp_progress" },
                lualine_x = { "searchcount", "selectioncount", harpoon_config, "lsp_client_name", lint_progress },
                lualine_y = { "encoding", "filetype" },
                lualine_z = { "location" },
            },
        },
    },
}

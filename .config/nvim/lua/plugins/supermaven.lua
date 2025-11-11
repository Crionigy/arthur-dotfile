return {
    enabled = false,
    "supermaven-inc/supermaven-nvim",
    config = function()
        require("supermaven-nvim").setup({
            keymaps = {
                accept_suggestion = '<A-x>'
            }
        });
    end,
}

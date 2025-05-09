return {
    {
        "ThePrimeagen/harpoon",
        branch = "harpoon2",
        dependencies = {
            "nvim-lua/plenary.nvim",
            "nvim-telescope/telescope.nvim",
        },
        config = function()
            local harpoon = require("harpoon")
            harpoon:setup()

            vim.keymap.set("n", "<C-e>", function()
                harpoon.ui:toggle_quick_menu(harpoon:list())
            end, { desc = "HARPOON toggle quick menu" })

            vim.keymap.set("n", "<leader>a", function()
                harpoon:list():add()
            end, { desc = "HARPOON mark buffer" })

            vim.keymap.set("n", "<leader>cl", function()
                harpoon:list():clear()
            end, { desc = "HARPOON claer marks" })

            vim.keymap.set("n", "<leader>h", function()
                harpoon:list():select(1)
            end)

            vim.keymap.set("n", "<leader>j", function()
                harpoon:list():select(2)
            end)

            vim.keymap.set("n", "<leader>k", function()
                harpoon:list():select(3)
            end)

            vim.keymap.set("n", "<leader>re", function()
                harpoon:list():remove()
            end)

            vim.keymap.set("n", "<leader>l", function()
                harpoon:list():select(4)
            end)

            -- Toggle previous & next buffers stored within Harpoon list
            vim.keymap.set("n", "<C-S-P>", function()
                harpoon:list():prev()
            end)

            vim.keymap.set("n", "<C-S-N>", function()
                harpoon:list():next()
            end)
        end,
    },
}

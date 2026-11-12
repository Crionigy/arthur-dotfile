return {
    {
        "nvim-telescope/telescope.nvim",
        -- tag = "v0.2.1",
        dependencies = {
            "nvim-lua/plenary.nvim",
            "nvim-telescope/telescope-live-grep-args.nvim",
            { "nvim-telescope/telescope-fzf-native.nvim", build = "make" },
        },
        config = function()
            local lga_actions = require("telescope-live-grep-args.actions")
            require("telescope").setup({
                defaults = {
                    prompt_prefix = "   ",
                    selection_caret = " ",
                    entry_prefix = " ",
                    sorting_strategy = "ascending",
                    layout_config = {
                        horizontal = {
                            prompt_position = "top",
                            preview_width = 0.55,
                        },
                        width = 0.87,
                        height = 0.80,
                    },
                    mappings = {
                        n = { ["q"] = require("telescope.actions").close },
                        i = {
                            ["<C-k>"] = lga_actions.quote_prompt(),
                            ["<C-i>"] = lga_actions.quote_prompt({ postfix = " --iglob " }),
                            ["<C-space>"] = lga_actions.to_fuzzy_refine,
                        },
                    },
                    extensions = {
                        fzf = {
                            fuzzy = true,
                            override_generic_sorter = true,
                            override_file_sorter = true, 
                            case_mode = "smart_case",
                        },
                        live_grep_args = { auto_quoting = true },
                    },
                    file_ignore_patterns = {
                        "%.png",
                        "%.svg",
                        "%.ttf",
                        "%.docx",
                        "%.pdf",
                        "%.gif",
                        "%.jpg",
                        "%.jpeg",
                        "%.webm",
                        "%.bpm",
                        "%.woff",
                        "%.woff2",
                        "%.xlsx",
                        "%.map",
                        "%.min.js$",
                        "%.min.css$",
                        "node_modules",
                        ".git/"
                    },
                },
            })

            require("telescope").load_extension("fzf")
            require("telescope").load_extension("live_grep_args")
        end,
    },
}

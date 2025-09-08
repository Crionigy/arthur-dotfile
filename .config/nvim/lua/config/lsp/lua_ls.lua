return {
    settings = {
        Lua = {
            runtime = { version = "LuaJIT" },
            diagnostics = {
                globals = { "vim", "love" },
                disable = { "missing-parameters", "missing-fields" },
            },
            workspace = {
                checkThirdParty = false,
                library = {
                    vim.env.VIMRUNTIME,
                    "${3rd}/love2d/library",
                    "./lib",
                },
            },
            telemetry = { enable = false },
        },
    },
}


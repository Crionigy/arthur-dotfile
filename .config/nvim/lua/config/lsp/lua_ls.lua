return {
  settings = {
    Lua = {
      diagnostics = { disable = { "missing-parameters", "missing-fields" } },
      workspace = {
        checkThirdParty = false,
        telemetry = { enable = false },
        library = {
          "${3rd}/love2d/library",
        },
      },
    },
  },
}

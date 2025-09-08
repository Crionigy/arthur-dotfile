local node_version = vim.fn.system("nvm version");
local angularls_path = "~/.config/nvm/versions/node/" .. node_version .. "/lib/node_modules/@angular/language-server"
return {
    "ngserver",
    "--stdio",
    "--tsProbeLocations",
    -- "../..,?/node_modules",
    angularls_path,
    "--ngProbeLocations",
    angularls_path,
    "--angularCoreVersion", "" }


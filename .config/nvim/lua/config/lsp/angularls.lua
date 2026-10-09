local node_version = vim.fn.system("nvm version");
local node_path = "C:/Users/ahsouki/AppData/Local/nvim-data/mason/packages/angular-language-server/node_modules/"
local project_lib_path = vim.loop.cwd() .. '\\WEB\\node_modules'
return {
    cmd = {
        "ngserver.cmd",
        "--stdio",
        "--tsProbeLocations",
        project_lib_path,
        -- "C:/Users/ahsouki/trabalho/SIGET_SF/WEB",
        "--ngProbeLocations",
        project_lib_path,
        -- "C:/Users/ahsouki/trabalho/SIGET_SF/WEB",
        "--forceStrictTemplates"
    },
    filetypes = { 'typescript', 'html', 'typescriptreact', 'htmlangular' },
    root_markers = { 'angular.json', 'nx.json' },
}

# Prompt
Import-Module posh-git
Import-Module oh-my-posh

# Icons
Import-Module -Name Terminal-Icons

# PSReadLine
Set-PSReadLineOption -BellStyle None
Set-PSReadLineOption -PredictionSource History

# Fzf
Import-Module PSFzf
Set-PsFzfOption -PSReadLineChordProvider 'Ctrl+f' -PSReadLineReverseHistory 'Ctrl+r'

# Load Prompt config
function Get-ScriptDirectory { Split-Path $MyInvocation.ScriptName }
$PROMPT_CONFIG = Join-Path (Get-ScriptDirectory) 'arthur.omp.json'
oh-my-posh --init --shell pwsh --config $PROMPT_CONFIG | Invoke-Expression

# Alias
Set-Alias g git

# Utilities
function which ($command) {
  Get-Command -Name $command -ErrorAction SilentlyContinue |
    Select-Object -ExpandProperty Path -ErrorAction SilentlyContinue
}
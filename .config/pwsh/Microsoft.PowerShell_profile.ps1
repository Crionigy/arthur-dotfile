#This file is suposed to be placed at C:/Users/<User>/Documents/Powershell
Import-Module -Name Terminal-Icons
Register-EngineEvent -SourceIdentifier 'PowerShell.OnIdle' -MaxTriggerCount 1 -Action {
    Import-Module -Name Terminal-Icons -Global
} | Out-Null
Import-Module PSReadline
Import-Module PSFzf

Set-PSReadlineKeyHandler -Key UpArrow -Function HistorySearchBackward
Set-PSReadlineKeyHandler -Key DownArrow -Function HistorySearchForward

Set-PSReadLineOption -PredictionViewStyle ListView 

Set-PsFzfOption -PSReadlineChordProvider 'Ctrl+t' -PSReadlineChordReverseHistory 'Ctrl+r'
Set-PsFzfOption -EnableAliasFuzzyEdit

# Set a flavor for easy access

$NVIM_CONFIG = 'C:\Users\ahsouki\AppData\Local\nvim'
$SIGET_DEV = '\\SRV72207\secure\SIGET.IISHosted\Web.config'
$TRABALHO = 'C:\Users\ahsouki\trabalho\'
# $Config = 'https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/refs/heads/main/themes/catppuccin_mocha.omp.json'
$Config = 'C:\Users\ahsouki\.config\catppuccin-mocha.omp.json'

[Console]::OutputEncoding = [Text.Encoding]::UTF8
oh-my-posh init pwsh --config $Config | Invoke-Expression

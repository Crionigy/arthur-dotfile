#This file is suposed to be placed at C:/Users/<User>/Documents/Powershell
Import-Module Catppuccin
Import-Module -Name Terminal-Icons
Import-Module PSReadline
Import-Module PSFzf

Set-PSReadlineKeyHandler -Key UpArrow -Function HistorySearchBackward
Set-PSReadlineKeyHandler -Key DownArrow -Function HistorySearchForward

Set-PSReadLineOption -PredictionViewStyle ListView 

Set-PsFzfOption -PSReadlineChordProvider 'Ctrl+t' -PSReadlineChordReverseHistory 'Ctrl+r'
Set-PsFzfOption -EnableAliasFuzzyEdit

# Set a flavor for easy access
$Flavor = $Catppuccin['Mocha']

$Config = 'https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/refs/heads/main/themes/catppuccin_mocha.omp.json'

#Env variables
$Env:nvimconfig = "C:\Users\Taiane\AppData\Local\nvim"

oh-my-posh init pwsh --config $Config | Invoke-Expression
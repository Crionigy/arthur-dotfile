
#PATH
export PATH="$HOME/.local/bin:$PATH"

export ZDOTDIR="$HOME/.config/zsh"

# Session
export XDG_SESSION_TYPE=wayland
export XDG_SESSION_DESKTOP=sway
export XDG_CURREN_DESKTOP=sway

export EDITOR="nvim"

export GTK_THEME='Adwaita:dark'

export XDG_CONFIG_HOME=$HOME/.config
export XDG_CACHE_HOME=$HOME/.cache
export XDG_DATA_HOME=$HOME/.local/share
export XDG_STATE_HOME=$HOME/.local/state

# Wayland stuff
export MOZ_ENABLE_WAYLAND=1
export QT_QPA_PLATFORMA=wayland
#export SDL_VIDEODRIVER=wayland
export _JAVA_AWT_WM_MONREPARENTING=1
export WLR_DRM_NO_MODIFIERS=1
export vblank_mode=0

#export ZVM_PATH=$XDG_DATA_HOME/zvm

exec sway "$@"

!macro customInit
  Rename $APPDATA\Roaming\Rambox $APPDATA\Roaming\RamboxBK
  nsExec::Exec '"$LOCALAPPDATA\Rambox\Update.exe" --uninstall -s'
  Rename $APPDATA\Roaming\RamboxBK $APPDATA\Roaming\Rambox
!macroend
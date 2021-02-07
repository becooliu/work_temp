call tools\env\Scripts\activate
:start
set /p id=version_id:
echo=
python tools\dump_testing_data.py %id% domain_list
goto start
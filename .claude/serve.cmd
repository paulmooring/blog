@echo off
set "PATH=C:\Ruby33-x64\bin;%PATH%"
bundle exec jekyll serve --livereload --host 127.0.0.1 --port 4000 --force-polling

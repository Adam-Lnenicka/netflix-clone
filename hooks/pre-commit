#!/usr/bin/env bash
################################################################################
# Use as a global mercurial/git pre commit or pre push hook to detect the type
# of project and run unittests before allowing a commit or push to a remote
# repository.
#
# Handy so that you don't have to remember to add test running hooks to every
# repo clone/fork you have.
################################################################################
echo "run-test-hooks executing..."

cmd=""

if [ -e "pom.xml" ];
then
   cmd="mvn clean -U test"
fi

if [ -e "manage.py" ];
then
   cmd="python manage.py test"
fi

if [ -e "setup.py" ];
then
    cmd="python -m unittest discover"
fi

$cmd
exit
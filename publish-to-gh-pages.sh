#!/bin/bash
# Run from public

if [[ $(git status -s) ]]
then
    echo "The working directory is dirty. Please commit any pending changes."
    exit 1;
fi

cd ..

echo "Deleting old publication"
rm -rf public
mkdir public
git worktree prune
rm -rf .git/worktrees/public/

echo "Checking out gh-pages branch into public"
git worktree add -B gh-pages public origin/gh-pages

echo "Removing existing files"
rm -rf public/*

echo "Generating site"
hugo

echo "Updating gh-pages branch"
echo "cd'ing into public"
cd public

echo "Adding back the CNAME after deletion."
echo binarymist.io > CNAME
echo "Adding back the google search site verification after deletion."
echo google-site-verification: google7fae6e706755d64a.html > google7fae6e706755d64a.html

echo "git add'ing all to staging"
git add --all
echo "git commit'ing"
git commit -m "Publishing to gh-pages (publish-to-gh-pages.sh)"



echo "Do you wish to push this commit?"
select yn in "Yes" "No"; do
    case $yn in
        Yes ) git push origin gh-pages; break;;
        No ) exit;;
    esac
done



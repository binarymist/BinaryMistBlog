#!/bin/bash
# Run from public

# In order to set-up the orphan gh-pages branch:
# Create a new orphan branch: git checkout --orphan gh-pages
# Clean all (untracked) files: git reset --hard or git rm -rf .
# Create first commit: git commit --allow-empty -m "Initializing gh-pages branch"
# Push the new branch on your repo: git push origin gh-pages
# Get back to your main branch: git checkout main
# Create the worktree in a public folder (public/ needs to not exist before running this): git worktree add -B gh-pages public origin/gh-pages

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



# DetachedDomWithFormControlName

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.4.

Reproduction for [Angular Issue 62388](https://github.com/angular/angular/issues/62388)

## To reproduce:

In a shell (assuming pnpm and VS code command line tool)
```zsh
git clone git@github.com:arobinson/angular-detached-dom-form-control-name-issue.git
cd angular-detached-dom-form-control-name-issue
pnpm install
code .
```

Then in VS code (or Cursor), open the launch/debug tools and run the `Launch Chrome against localhost`
(this will start the server and launch the browser).

Follow the steps in the HTML to reproduce the issue.
Notice that destroying the entire component will fix the leak.
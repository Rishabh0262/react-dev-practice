[33mcommit a70c2c08ad5a9970a666c2645e5a63c954aba928[m[33m ([m[1;36mHEAD -> [m[1;32mreact-1-1[m[33m, [m[1;31morigin/react-1-1[m[33m, [m[1;31morigin/react-1[m[33m, [m[1;32mreact-1[m[33m)[m
Author: Rishabh Gupta <rishabhgupta0262@gmail.com>
Date:   Mon Feb 20 23:28:04 2023 +0530

    We do nothing but use 'React.memo(<name_of_functional_component>)' in 'export default' of 'MemoComp.js'.   This way it will help me avoiding unnecessary re-render of the Component in the web page.   [MemoComponent => rfce, PureComponent => rce]

[33mcommit 277e8e2755cffb67abab9235cd14fe71519a8fa0[m
Author: Rishabh Gupta <rishabhgupta0262@gmail.com>
Date:   Sat Feb 18 01:54:26 2023 +0530

    Memo is for Functional Component. (as same as PureComp for Class Component). we export React.memo(functional-ComponentName).

[33mcommit febccea262c5d4fd3660a8071e6aa225c67855a0[m
Author: Rishabh Gupta <rishabhgupta0262@gmail.com>
Date:   Sat Feb 18 01:24:07 2023 +0530

    used  ParentComponent as PureComponent. Make sure to use the NEW array/object to show difference in prev. or curr. state/props.

[33mcommit ef45788006555139610852f4cdd81f8b568039cc[m
Author: Rishabh Gupta <rishabhgupta0262@gmail.com>
Date:   Sat Feb 18 00:32:37 2023 +0530

    rendered props in Child Component that is passed from Parent Component

[33mcommit ae96e17c6ea07b918f237c597dd3877a0c68b1e1[m
Author: Rishabh Gupta <rishabhgupta0262@gmail.com>
Date:   Sat Feb 18 00:25:17 2023 +0530

    Here we used PureComponent & RegularComponent comparision. So console is showing re-rendering of with a buffer of 2 secs.

[33mcommit 6ad3e5129014e9bd54c2bb59577898dc663a3cbd[m
Author: Rishabh Gupta <rishabhgupta0262@gmail.com>
Date:   Sat Feb 18 00:22:09 2023 +0530

    Here we used PureComponent & RegularComponent comparision. So console is showing re-rendering of with a buffer or 2 secs.

[33mcommit 1fe5115dc52327faa26610d98e3376df3ad39c04[m
Author: Rishabh Gupta <rishabhgupta0262@gmail.com>
Date:   Fri Feb 17 21:58:46 2023 +0530

    Restored App.js to to blank

[33mcommit 8095ca54034e6ef91b8ac35c672edd0751051b49[m[33m ([m[1;31morigin/react-fragments[m[33m, [m[1;32mreact-fragments[m[33m)[m
Author: Rishabh Gupta <rishabhgupta0262@gmail.com>
Date:   Fri Feb 17 10:13:29 2023 +0530

    Example of using 'key' attribute in <React.Fragment>...</React.Fragment>

[33mcommit d095a7dee6830bffaecbfd5a77dd9f121c32d791[m
Author: Rishabh Gupta <rishabhgupta0262@gmail.com>
Date:   Fri Feb 17 09:42:37 2023 +0530

    Console warnings from the Column.js is resolved using wraping the elements into <> ... </>.

[33mcommit 89ae9c329cdaa2107b2332705b14283e1c731a99[m
Author: Rishabh Gupta <rishabhgupta0262@gmail.com>
Date:   Fri Feb 17 09:38:57 2023 +0530

    Here we used the Table.js & Columns.js(as child component).
    
    But in child component 2 <td> can't be return in <div> tag... as it is a subcomponent of <table> tag.
    
    That's why, we need to use either <> ... </> OR <React.Fragment> ... <React.Fragment>

[33mcommit 919838b87890c2c2c2dc768aab5c6bb4bc5ec4b0[m
Author: Rishabh Gupta <rishabhgupta0262@gmail.com>
Date:   Fri Feb 17 08:54:35 2023 +0530

    Untill Lecture 24, LifeCycle Component

[33mcommit d62233af216fbc0ce79b417c5aea304f880a5976[m
Author: Rishabh Gupta <rishabhgupta0262@gmail.com>
Date:   Wed Jan 4 17:49:08 2023 +0530

    Initialize project using Create React App

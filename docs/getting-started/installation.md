---
id: installation
title: Installation
sidebar_label: Installation
slug: /installation
---

:::info
This site is under construction.
:::

### Installing with **pip**

Install the current release of **networkx** with **pip**:

```
pip install networkx
```

To upgrade to a newer release use the `--upgrade` flag:

```
pip install --upgrade networkx
```

If you do not have permission to install software systemwide, you can install into your user directory using the `--user` flag:

```
pip install --user networkx
```

### Installing with **Anaconda**
NetworkX is [currently installed](https://docs.continuum.io/anaconda/packages/pkg-docs/) with Anaconda. Miniconda doesn't come with NetworkX by default.

You can install/update NetworkX to the latest version with:
```
conda install networkx
```
of if you want to update NetworkX installation then:
```
conda update networkx
```

### Installing from source
*Source file archive*
1. Download the source from [PyPi](https://pypi.python.org/pypi/networkx/) or get the latest version from [Github](https://github.com/networkx/networkx/).
1. Unpack and change directory to the source directory.
1. Run `python setup.py install` to build and install

*Installing from GitHub*
1. Clone NetworkX repository (see https://github.com/networkx/networkx/ for options)
 ``
 git clone https://github.com/networkx/networkx/.git
 ``
1. Change directory to `NetworkX`
1. Run `python setup.py install` to build nad install

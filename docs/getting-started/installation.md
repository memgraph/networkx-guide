---
id: installation
title: Installation
sidebar_label: Installation
slug: /installation
---

## Installing with **pip**

Install the most recent stable release of **networkx** with **pip**:

```
pip install networkx
```

To upgrade to a newer release, use the `--upgrade` flag:

```
pip install --upgrade networkx
```

If you do not have the right permissions to install software systemwide, you can install NetworkX into your user directory using the `--user` flag:

```
pip install --user networkx
```

You can also manually download the networkx repository from 
[GitHub](https://github.com/networkx/networkx/releases) or [PyPI](https://pypi.python.org/pypi/networkx). 
To install one of these versions, unpack it and run the following command from the top-level source directory:

```
pip install .
```

## Installing with **Anaconda**

NetworkX is [currently available](https://docs.continuum.io/anaconda/packages/pkg-docs/) through the Anaconda distribution platform. 
Miniconda doesn't come with NetworkX by default.

You can install the latest version of NetworkX with:

```
conda install networkx
```

If you want to update your current version of NetworkX then run:
```
conda update networkx
```

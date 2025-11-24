---
title: KaTeX数学公式测试
date: 2025-01-24T00:00:00.000Z
pubDate: 2025-01-24T00:00:00.000Z
author: Xcpmd
authorAvatar: /src/assets/avatar.jpg
tags: [KaTeX, 数学公式, 测试]
categories: [技术测试]
description: 测试KaTeX数学公式渲染功能的文章，包含各种类型的数学公式示例。
draft: false

url: ""
customCopyright: ""
customLicense: ""
customLicenseUrl: ""
---

# KaTeX数学公式测试

本文用于测试KaTeX数学公式渲染功能，包含各种类型的数学公式示例。

## 行内公式示例

行内公式使用单个美元符号包裹，例如：$E = mc^2$ 是爱因斯坦的质能方程。

另一个行内公式示例：$\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$ 表示前n个自然数的和。

## 块级公式示例

块级公式使用双美元符号包裹，例如：

$$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$$

这是高斯积分公式。

## 复杂公式示例

### 矩阵运算

$$
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
\times
\begin{bmatrix}
x \\
y \\
z
\end{bmatrix}
=
\begin{bmatrix}
1x + 2y + 3z \\
4x + 5y + 6z \\
7x + 8y + 9z
\end{bmatrix}
$$

### 极限和导数

$$\lim_{x \to 0} \frac{\sin x}{x} = 1$$

$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

### 积分运算

$$\int_{a}^{b} f(x) dx = F(b) - F(a)$$

其中 $F'(x) = f(x)$。

### 物理公式

薛定谔方程：

$$i\hbar\frac{\partial}{\partial t}\Psi(\mathbf{r},t) = \hat{H}\Psi(\mathbf{r},t)$$

麦克斯韦方程组：

$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \mu_0\mathbf{J} + \mu_0\varepsilon_0\frac{\partial \mathbf{E}}{\partial t}
\end{aligned}
$$

## 化学公式

化学反应方程式：

$$2H_2 + O_2 \rightarrow 2H_2O$$

## 统计公式

正态分布概率密度函数：

$$f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$

## 测试结论

如果以上所有公式都能正确渲染，说明KaTeX集成成功！
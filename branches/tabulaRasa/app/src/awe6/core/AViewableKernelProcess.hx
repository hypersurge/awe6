/*
 *                        _____
 *     _____      _____  / ___/
 *    /__   | /| /   _ \/ __ \
 *   / _  / |/ |/ /  __  /_/ /
 *   \___/|__/|__/\___/\____/
 *    awe6 is game, inverted
 *
 * Copyright (c) 2010, Robert Fell, awe6.org
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

package awe6.core;

/**
 * Encapsulates a kernel process that has a visual representation.
 *
 * The view is supposed to visualize the actors and activities in the process.
 * <p>When the kernel process is bound to a kernel, the process' view is added
 * to the view of the first viewable process in the linear path beginning at
 * the view and terminating at the kernel. The view is detached from the view
 * tree when the process is disposed. The view of the process should only be
 * manipulated by the process itself. Only the kernel should add and remove
 * the view from the view tree.
 */
class AViewableKernelProcess extends KernelProcess, implements IViewable
{
	public var view( default, null ):AView;

	private function new( p_parent:KernelProcess, p_view:AView ):Void
	{
		view = p_view;
		super(p_parent);
	}

	/**
	 * Disposes this viewable kernel process.
	 *
	 * The process' view is disposed of first, then the super class'
	 * implementation is called.
	 */
	override public function dispose():Void
	{
		// view.dispose();
		super.dispose();
	}
}

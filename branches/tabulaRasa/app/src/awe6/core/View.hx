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
import awe6.interfaces.EViewPriority;

/**
 * Encapsulates a mechanism to display the visual representation of an object.
 *
 * <p>The view is understood as a rectangular portion of the screen in which
 * something is displayed. The best analogy is the screen of a TV -- it's a
 * mechanism to view what a given channel is broadcasting.</p>
 * <p>The view could be a composition of other views. The best analogy are
 * the higly popular in the United State TVs which allow multiple channels to
 * be viewed simultaneously.</p>
 * <p>To actually be displayed on the screen, the view must be a node of the
 * so-called view tree whose root node is the view of the awe6 kernel. Once
 * added to the tree, the view's visibility can be controlled with the
 * respective property.</p>
 * <p>The most important part of the view is its context. The context is the
 * view is understood as the <b>platform-dependent</b> object, process etc.
 * displayed by the view. The best definition is probably the one by Robert
 * Fell (the creator of awe6): "The context is the view's reality."</p>
 */
class View
{
	/**
	 * The context of this view.
	 *
	 * This property is <b>read-only</b>.
	 * <p>The context of a view is <b>platform-dependent</b> and is understood
	 * as the thing that the view is displaying, i.e. the reality of or behind
	 * the view.</p>
	 * <p>The context is providing the bridge to platform-dependent mechanisms
	 * such as events on the Flash or NME target.</p>
	 * <p>The context should be handled with great care, modifying it might
	 * invalidate the contract of this class.</p>
	 * <p>The view does not have to be associated with a context, in this case
	 * the value of the property is null.</p>
	 */
	public var context( null, null ):Context;

	/**
	 * The user data associated with this object.
	 *
	 * There is no restriction on what this property can hold as the semantics
	 * will be known only to the user of the view.
	 */
	public var userData( _get_userData, _set_userData ):Dynamic;
	
	/**
	 * The priority of this view in the depth stack of its parent view.
	 *
	 * Since each view is potentially a composition of other views, the
	 * question arises as to which child view of the composition is displayed
	 * on the top of the others, which view is immediately below it and so on.
	 * This ordering is known as the depth stack of the parent view. The
	 * position of the view in the depth stack is controlled using the view's
	 * priority. Each write to this  property causes the view stack of the
	 * parent view to be rebuilt.
	 */
	public var priority( _get_priority, _set_priority ):EViewPriority;
	
	/**
	 * The parent of this view.
	 *
	 * This property is <b>read-only</b>.
	 * <p>Use the methods addView and removeView to add children to a view.<p>
	 */
	public var parent( _get_parent, null ):View;
	
	/**
	 *
	 */
	public var x( _get_x, _set_x ):Float;
	
	/**
	 *
	 */
	public var y( _get_y, _set_y ):Float;
	
	/**
	 *
	 */
	public var width( _get_width, _set_width ):Float;
	
	/**
	 *
	 */
	public var height( _get_height, _set_height ):Float;
	
	/**
	 *
	 */
	public var orientation( _get_orientation, _set_orientation ):Float;
	
	/**
	 *
	 */
	public var visible( _get_visible, _set_visible );

	private var children: Array<View>;

	public var addChild();
	public var removeChild();

	private function _get_userData():Dynamic
	{
		return userData;
	}
	
	private function _set_userData( value:Dynamic ):Dynamic
	{
		userData = value;
		return userData;
	}

	private function _get_priority():EViewPriority
	{
		return priority;
	}

	private function _set_priority( value:EViewPriority ):EViewPriority
	{
		priority = value;
		return priority;
	}
	
	private function _get_parent():View
	{
		return parent;
	}

	private function _set_parent( value:View ):View
	{
		parent = value;
		return parent;
	}
	
	private function _get_x():Float
	{
		prio
		return x;
	}

	private function _set_x( value:Float ):Float
	{
		x = value;
		return x;
	}
	
	private function _get_y():Float
	{
		return y;
	}

	private function _set_y( value:Float ):Float
	{
		y = value;
		return y;
	}
	
	private function _get_width():Float
	{
		return width;
	}

	private function _set_width( value:Float ):Float
	{
		width = value;
		return width;
	}
	
	private function _get_height():Float
	{
		return height;
	}

	private function _set_height( value:Float ):Float
	{
		height = value;
		return height;
	}
	
	private function _get_orientation():Float
	{
		return orientation;
	}

	private function _set_orientation( value:Float ):Float
	{
		orientation = value;
		return orientation;
	}

	private function _get_visible():Bool
	{
		return visible;
	}

	private function _set_visible( value:Bool ):Bool
	{
		visible = value;
		return visible;
	}
}

/**
 * The View class provides a minimalist implementation of the IView interface.
 * <p>For API documentation please review the corresponding Interfaces.</p>
 * <p>Kernel includes target specific code so is implemented using the awe6.core.drivers package.</p>
 * @author	Robert Fell
 */
#if cpp
typedef View = awe6.core.drivers.nme.View;
#elseif flash
typedef View = awe6.core.drivers.flash.View;
#elseif js
typedef View = awe6.core.drivers.jeash.View;
#else
typedef View = awe6.core.drivers.AView;
#end

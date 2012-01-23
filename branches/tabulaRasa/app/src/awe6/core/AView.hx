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

import awe6.driver.Context;

/**
 * Encapsulates a mechanism to display the visual representation of an object.
 *
 * <p>The view is understood as a rectangular portion of the screen in which
 * something is displayed. The best analogy is the screen of a TV -- it's a
 * mechanism to view what a given channel is broadcasting.</p>
 * <p>The view could be a composition of other views. The best analogy are
 * the higly popular in the United States TVs which allow multiple channels to
 * be viewed simultaneously.</p>
 * <p>To actually be displayed on the screen, the view must be a node of the
 * so-called view tree whose root node is the view of the awe6 kernel. Once
 * added to the tree, the view's visibility can be controlled with the visible
 * property.</p>
 * <p>An integral part of the view is the context. The context of the view is
 * understood as the <b>platform-dependent</b> object, process etc. displayed
 * by the view. The best definition is probably the one by Robert Fell (the
 * creator of awe6): "The context is the view's reality."</p>
 * <p>The context, if the view has one, has to fill the view entirely. If the
 * dimensions of the view change, the context should follow.</p>
 * <p>The view defines a 2-dimensional Cartesian coordinate sytem whose origin
 * (0,0) is at the top-left corner of the view. The positive x axis extends to
 * the right of the origin and is parallel to the top edge of the view. The
 * positive y axis extends to the bottom of the origin and is parallel to the
 * left edge of the view. Each transformation applied to the view is also
 * applied to the coordinate system. Chlid views are positioned and oriented
 * relative to their parent view's coordinate system.</p>
 */
class AView implements IDisposable
{
	/**
	 * The context of this view.
	 *
	 * This property is <b>read-only</b>.
	 * <p>The context of a view is <b>platform-dependent</b> and is understood
	 * as the thing that the view is displaying, the <b>reality</b> of or
	 * behind the view. Little assumptions are made about the exact nature
	 * of the context.</p>
	 * <p>The context is providing the bridge to platform-dependent mechanisms
	 * such as events and the complex drawing API on the Flash or NME target.
	 * </p>
	 * <p>The context should be handled with great care, modifying it might
	 * invalidate the contract of this class; changes to the context are
	 * <b>not</b> guranteed to be synched back to the view.</p>
	 * <p>The view does not have to be associated with a context, in this case
	 * the value of the property is null.</p>
	 */
	public var context( default, null ):Context;

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
	 * priority. The view the highest priority is displayed on top of all
	 * others. Below everything else is the view with the lowest priority.
	 * There is no rule on the ordering of views with equivalent priorities.
	 * <p>Writing to this property might cause the depth stack of the view to
	 * be rebuilt.</p>
	 * <p>The initial value of this property is 0.</p>
	 */
	public var priority( _get_priority, _set_priority ):Int;

	/**
	 * The parent of this view.
	 *
	 * This property is <b>read-only</b>.
	 * <p>Use the methods addView and removeView to add children to a view.<p>
	 * <p>If the view has no parent, then the value is null and the view is
	 * thought of as being a child of an infinetely large parent view. This
	 * ensures that transformations can take place prior to adding the view
	 * to another one.</p>
	 *
	 * @see addChild
	 * @see removeChild
	 */
	public var parent( _get_parent, null ):AView;
	
	/**
	 * The x coordinate of the view relative to the parent view.
	 *
	 * For more information on the coordinate system according to which the
	 * positioning is done, see the documentation of this class.
	 * <p>If the view has a context, then the initial value of this property is
	 * determined based on the context, otherwise the value is 0.</p>
	 */
	public var x( _get_x, _set_x ):Float;
	
	/**
	 * The y coordinate of the view relative to the parent view.
	 *
	 * For more information on the coordinate system according to which the
	 * positioning is done, see the documentation of this class.
	 * <p>If the view has a context, then the initial value of this property is
	 * determined based on the context, otherwise the value is 0.</p>
	 */
	public var y( _get_y, _set_y ):Float;
	
	/**
	 * The width of the view relative to the parent view.
	 *
	 * The width and height of the view define how much what area, namely
	 * width * height the view occupies in the parent's coordinate system.
	 * Thus, the width and height are not absolute measures of how large the
	 * view will appear.
	 * <p>Writes to this property might affect other properties as well based
	 * on the value of origin.</p>
	 * <p>Because the context is required to fill the whole screen, modifying
	 * the dimensions of the view might cause the context to stretch or to
	 * be extended somehow in order to show more content. Based on the
	 * reaction of the context to the change, the coordinate system of the view
	 * might be stretched.</p>
	 * <p>If the view has a context, then the initial value of this property is
	 * determined based on the context, otherwise the value is 0.</p>
	 */
	public var width( _get_width, _set_width ):Float;
	
	/**
	 * The height of the view relative to the parent view.
	 *
	 * The width and height of the view define how much what area, namely
	 * width * height the view occupies in the parent's coordinate system.
	 * Thus, the width and height are not absolute measures of how large the
	 * view will appear.
	 * <p>Writes to this property might affect other properties as well based
	 * on the value of origin.</p>
	 * <p>Because the context is required to fill the whole screen, modifying
	 * the dimensions of the view might cause the context to stretch or to
	 * be extended somehow in order to show more content. Based on the
	 * reaction of the context to the change, the coordinate system of the view
	 * might be stretched.</p>
	 * <p>If the view has a context, then the initial value of this property is
	 * determined based on the context, otherwise the value is 0.</p>
	 */
	public var height( _get_height, _set_height ):Float;
	
	/**
	 * The orientation angle in degrees of the view relative the parent view
	 * in degrees.
	 *
	 * Also understood as the rotation of the view. The orientation adds more
	 * flexiblity to positioning the view in the parent's coordinate system.
	 * <p>The view is rotated around the point defined by the origin property.
	 * Thus, the position of the view might be affected by writes to this
	 * property as well.</p>
	 * <p>If the view has a context, then the initial value of this property is
	 * determined based on the context, otherwise the value is 0.</p>
	 */
	public var orientation( _get_orientation, _set_orientation ):Float;

	/**
	 * The origin point of this view, specified in percentage of the width and
	 * height of the view, which defines how transformations are applied to the
	 * view.
	 *
	 * The initial value is [0, 0].
	 * <p>The choice to use percentages instead of absolute values is necessary
	 * because it's impossible to predict that an absolute value will always
	 * map to the same position in the view's coordinate system.</p>
	 * <p>The origin [0, 0] maps to the top-left corner of the view and the
	 * origin [1, 1] maps to the bottom-right corner of the view. Negative
	 * values and values outside of the range [0; 1] are allowed and refer
	 * to points outside the view.</p>
	 * <p>All transformations on the view are performed in such manner that
	 * the location of the origin point in the parent view's coordinate system
	 * before and after the transformation is the same.</p>
	 */
	public var transformOrigin( _get_transformOrigin, _set_transformOrigin ):Array<Float>;

	/**
	 * Controls the visibility of this view.
	 *
	 * The initial value is true.
	 * <p>This property allows the visibility of the view to be controlled
	 * after the view has been added to the view tree. If the value is false
	 * then the view will not be visible, even if it's part of the view tree.
	 * </p>
	 */
	public var visible( _get_visible, _set_visible ):Bool;

	public var disposed( default, null ):Bool;
	
	/**
	 * The child views of this view.
	 *
	 * The data structure is an array for the child views need to be sorted
	 * based on their priority.
	 */
	private var _children:Array<AView>;

	private function new ( p_context:Context ):Void
	{
		context = p_context;
		_init();
	}

	private function _init()
	{
		_children = [];
		priority = 0;
		x = 0;
		y = 0;
		width = 0;
		height = 0;
		orientation = 0;
		transformOrigin = [.0, .0];
		visible = true;
	}

	public function dispose():Void
	{
		if ( disposed )
		{
			return;
		}

		disposed = true;
	}
	
	/**
	 * Adds the specified view as a child of this view.
	 *
	 * If the specified view is already a child of this view, this method does
	 * nothing and returns false. Otherwise the view is added and the method
	 * returns true. If the view is a already of child of another view, it is
	 * first removed from its current parent. After the view has been added,
	 * the depth stack is rebuilt.
	 */
	public function addChild( p_view:AView ):Void
	{
		// Remove the view from it's current parent. If the current parent is
		// this view, do nothing.
		//

		if ( p_view.parent != null )
		{
			if (p_view.parent != this)
			{
				p_view.parent.removeChild(p_view);
			}
			else
			{
				return;
			}
		}

		// Add the view as a child, then rebuild the depth stack.
		//

		_children.push( p_view );
		p_view.parent = this;
		
		_rebuildDepthStack();
	}

	/**
	 * Removes the specified child view from this view.
	 *
	 * If the specified view is not a child of this view, the method does
	 * nothing and returns false. Otherwise the view is removed and the
	 * method returns true.
	 */
	public function removeChild( p_view:AView ):Void
	{
		if ( p_view.parent != this )
		{
			return;
		}
	
		_children.remove(p_view);
		p_view.parent = null;
	}

	/**
	 * Rebuilds the depth stack of this view based on the priorties of the
	 * child views.
	 */
	private function _rebuildDepthStack():Void
	{
		_children.sort(comparePriorities);
	}

	private function _get_userData():Dynamic
	{
		return userData;
	}
	
	private function _set_userData( p_value:Dynamic ):Dynamic
	{
		userData = p_value;
		return userData;
	}

	private function _get_priority():Int
	{
		return priority;
	}

	private function _set_priority( p_value:Int ):Int
	{
		priority = p_value;

		if ( parent != null )
		{
			parent._rebuildDepthStack();
		}

		return priority;
	}
	
	private function _get_parent():AView
	{
		return parent;
	}
	
	private function _get_x():Float
	{
		return x;
	}

	private function _set_x( p_value:Float ):Float
	{
		x = p_value;
		return x;
	}
	
	private function _get_y():Float
	{
		return y;
	}

	private function _set_y( p_value:Float ):Float
	{
		y = p_value;
		return y;
	}
	
	private function _get_width():Float
	{
		return width;
	}

	private function _set_width( p_value:Float ):Float
	{
		width = p_value;
		return width;
	}
	
	private function _get_height():Float
	{
		return height;
	}

	private function _set_height( p_value:Float ):Float
	{
		height = p_value;
		return height;
	}
	
	private function _get_orientation():Float
	{
		return orientation;
	}

	private function _set_orientation( p_value:Float ):Float
	{
		orientation = p_value;
		return orientation;
	}

	private function _get_transformOrigin():Array<Float>
	{
		return transformOrigin;
	}

	private function _set_transformOrigin( p_value:Array<Float> ):Array<Float>
	{
		transformOrigin = p_value;
		return transformOrigin;
	}

	private function _get_visible():Bool
	{
		return visible;
	}

	private function _set_visible( p_value:Bool ):Bool
	{
		visible = p_value;
		return visible;
	}

	private static function comparePriorities( viewA:AView, viewB:AView ):Int
	{
		var l_value = viewA.priority - viewB.priority;
		return
			if ( l_value < 0 )
				-1;
			else if ( l_value == 0)
				0;
			else
				1;
	}
}

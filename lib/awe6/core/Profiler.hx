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
 * The Profiler class provides debug information.  Based on net.hires.utils.Stats by Mr.doob & Theo v1.3
 * <p>Profiler includes target specific code so is implemented using the awe6.core.drivers package.</p>
 * @author	Robert Fell
 */
#if awe6DriverRemap
typedef Profiler = haxe.macro.MacroType<[ awe6.core.Macros.driverRemap( "Profiler" ) ]>;
#elseif ( cpp || neko )
typedef Profiler = awe6.core.drivers.openfl.native.Profiler;
#elseif flash
typedef Profiler = awe6.core.drivers.flash.Profiler;
#elseif js
typedef Profiler = awe6.core.drivers.openfl.html5.Profiler;
#else
typedef Profiler = awe6.core.drivers.AProfiler;
#end

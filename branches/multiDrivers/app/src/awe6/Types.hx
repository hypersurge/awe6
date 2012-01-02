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

package awe6;

/**
 * This collection is intended to provide:
 * Single dependency for importing all of awe6
 * Single dependency for generating documentaion of awe6
 * Alternative shorthand namespace for awe6 - e.g. no need to reference core or interface packages.
 */

typedef AAssetManager = awe6.core.AAssetManager;
typedef AFactory = awe6.core.AFactory;
typedef APreloader = awe6.core.APreloader;
typedef ASession = awe6.core.ASession;
typedef AudioManager = awe6.core.AudioManager;
typedef BasicButton = awe6.core.BasicButton;
typedef Context = awe6.core.Context;
typedef Encrypter = awe6.core.Encrypter;
typedef Entity = awe6.core.Entity;
typedef InputJoypad = awe6.core.InputJoypad;
typedef InputKeyboard = awe6.core.InputKeyboard;
typedef InputManager = awe6.core.InputManager;
typedef InputMouse = awe6.core.InputMouse;
typedef Kernel = awe6.core.Kernel;
typedef MessageManager = awe6.core.MessageManager;
typedef Overlay = awe6.core.Overlay;
typedef Process = awe6.core.Process;
typedef Profiler = awe6.core.Profiler;
typedef Scene = awe6.core.Scene;
typedef SceneManager = awe6.core.SceneManager;
typedef SceneTransition = awe6.core.SceneTransition;
typedef TextStyle = awe6.core.TextStyle;
typedef Tools = awe6.core.Tools;
typedef View = awe6.core.View;

typedef EAgenda = awe6.interfaces.EAgenda;
typedef EAudioChannel = awe6.interfaces.EAudioChannel;
typedef EJoypadButton = awe6.interfaces.EJoypadButton;
typedef EKey = awe6.interfaces.EKey;
typedef EMessage = awe6.interfaces.EMessage;
typedef EMouseButton = awe6.interfaces.EMouseButton;
typedef EMouseCursor = awe6.interfaces.EMouseCursor;
typedef EOverlayButton = awe6.interfaces.EOverlayButton;
typedef EScene = awe6.interfaces.EScene;
typedef ETextAlign = awe6.interfaces.ETextAlign;
typedef ETextStyle = awe6.interfaces.ETextStyle;
typedef IAgendaManager = awe6.interfaces.IAgendaManager;
typedef IAssetManager = awe6.interfaces.IAssetManager;
typedef IAssetManagerProcess = awe6.interfaces.IAssetManagerProcess;
typedef IAudioManager = awe6.interfaces.IAudioManager;
typedef IDisposable = awe6.interfaces.IDisposable;
typedef IEncrypter = awe6.interfaces.IEncrypter;
typedef IEntity = awe6.interfaces.IEntity;
typedef IEntityCollection = awe6.interfaces.IEntityCollection;
typedef IFactory = awe6.interfaces.IFactory;
typedef IInputJoypad = awe6.interfaces.IInputJoypad;
typedef IInputKeyboard = awe6.interfaces.IInputKeyboard;
typedef IInputManager = awe6.interfaces.IInputManager;
typedef IInputMouse = awe6.interfaces.IInputMouse;
typedef IKernel = awe6.interfaces.IKernel;
typedef ILogger = awe6.interfaces.ILogger;
typedef IMessageManager = awe6.interfaces.IMessageManager;
typedef IOverlay = awe6.interfaces.IOverlay;
typedef IOverlayProcess = awe6.interfaces.IOverlayProcess;
typedef IPauseable = awe6.interfaces.IPauseable;
typedef IPosition = awe6.interfaces.IPosition;
typedef IPreloader = awe6.interfaces.IPreloader;
typedef IPriority = awe6.interfaces.IPriority;
typedef IProcess = awe6.interfaces.IProcess;
typedef IProgress = awe6.interfaces.IProgress;
typedef IResettable = awe6.interfaces.IResettable;
typedef IScene = awe6.interfaces.IScene;
typedef ISceneManager = awe6.interfaces.ISceneManager;
typedef ISceneTransition = awe6.interfaces.ISceneTransition;
typedef ISession = awe6.interfaces.ISession;
typedef ITextStyle = awe6.interfaces.ITextStyle;
typedef ITools = awe6.interfaces.ITools;
typedef IUpdateable = awe6.interfaces.IUpdateable;
typedef IView = awe6.interfaces.IView;
typedef IViewable = awe6.interfaces.IViewable;

/**
 * Adding a class here improves some editors' shortcut keys.  It has no other purpose, hence being private.
 */
class Types
{
	private function new() 
	{
	}
}
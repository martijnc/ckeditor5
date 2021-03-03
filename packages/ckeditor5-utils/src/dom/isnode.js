/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module utils/dom/isnode
 */

import { isElement } from 'lodash-es';

/**
 * Checks if the object is a native DOM Node.
 *
 * @param {*} obj
 * @returns {Boolean}
 */
export default function isNode( obj ) {
	if ( obj ) {
		return typeof obj === 'object' && obj.nodeType !== undefined;
	}

	return false;
}

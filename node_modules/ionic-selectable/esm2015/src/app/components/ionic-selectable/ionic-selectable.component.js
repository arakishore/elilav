/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable-next-line:max-line-length
import { Component, ContentChild, ElementRef, EventEmitter, forwardRef, HostBinding, Input, IterableDiffers, Optional, Output, Renderer2, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonItem, ModalController, Platform } from '@ionic/angular';
import { IonicSelectableAddItemTemplateDirective } from './ionic-selectable-add-item-template.directive';
import { IonicSelectableCloseButtonTemplateDirective } from './ionic-selectable-close-button-template.directive';
import { IonicSelectableFooterTemplateDirective } from './ionic-selectable-footer-template.directive';
import { IonicSelectableGroupEndTemplateDirective } from './ionic-selectable-group-end-template.directive';
import { IonicSelectableGroupTemplateDirective } from './ionic-selectable-group-template.directive';
import { IonicSelectableHeaderTemplateDirective } from './ionic-selectable-header-template.directive';
import { IonicSelectableItemEndTemplateDirective } from './ionic-selectable-item-end-template.directive';
import { IonicSelectableItemIconTemplateDirective } from './ionic-selectable-item-icon-template.directive';
import { IonicSelectableItemTemplateDirective } from './ionic-selectable-item-template.directive';
import { IonicSelectableMessageTemplateDirective } from './ionic-selectable-message-template.directive';
import { IonicSelectableModalComponent } from './ionic-selectable-modal.component';
import { IonicSelectablePlaceholderTemplateDirective } from './ionic-selectable-placeholder-template.directive';
import { IonicSelectableSearchFailTemplateDirective } from './ionic-selectable-search-fail-template.directive';
import { IonicSelectableTitleTemplateDirective } from './ionic-selectable-title-template.directive';
import { IonicSelectableValueTemplateDirective } from './ionic-selectable-value-template.directive';
import { IonicSelectableIconTemplateDirective } from './ionic-selectable-icon-template.directive';
export class IonicSelectableComponent {
    /**
     * @param {?} _modalController
     * @param {?} _platform
     * @param {?} ionItem
     * @param {?} _iterableDiffers
     * @param {?} _element
     * @param {?} _renderer
     */
    constructor(_modalController, _platform, ionItem, _iterableDiffers, _element, _renderer) {
        this._modalController = _modalController;
        this._platform = _platform;
        this.ionItem = ionItem;
        this._iterableDiffers = _iterableDiffers;
        this._element = _element;
        this._renderer = _renderer;
        this._cssClass = true;
        this._isOnSearchEnabled = true;
        this._isEnabled = true;
        this._shouldBackdropClose = true;
        this._isOpened = false;
        this._value = null;
        this._canClear = false;
        this._hasConfirmButton = false;
        this._isMultiple = false;
        this._canAddItem = false;
        this.onItemsChange = new EventEmitter();
        this._hasIonLabel = false;
        this._ionLabelPosition = null;
        this._label = null;
        this._valueItems = [];
        this._searchText = '';
        this._hasSearchText = false;
        this._groups = [];
        this._itemsToConfirm = [];
        this._selectedItems = [];
        this._filteredGroups = [];
        this._isAddItemTemplateVisible = false;
        this._isFooterVisible = true;
        this._itemToAdd = null;
        this._footerButtonsCount = 0;
        this._hasFilteredItems = false;
        /**
         * A list of items.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#items).
         *
         * \@default []
         * \@memberof IonicSelectableComponent
         */
        this.items = [];
        this.itemsChange = new EventEmitter();
        /**
         * Modal CSS class.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalcssclass).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.modalCssClass = null;
        /**
         * Modal enter animation.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalenteranimation).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.modalEnterAnimation = null;
        /**
         * Modal leave animation.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalleaveanimation).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.modalLeaveAnimation = null;
        /**
         * Determines whether Confirm button is enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isconfirmbuttonenabled).
         *
         * \@default true
         * \@memberof IonicSelectableComponent
         */
        this.isConfirmButtonEnabled = true;
        /**
         * Item property to use as a unique identifier, e.g, `'id'`.
         * **Note**: `items` should be an object array.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemvaluefield).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.itemValueField = null;
        /**
         * Item property to display, e.g, `'name'`.
         * **Note**: `items` should be an object array.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemtextfield).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.itemTextField = null;
        /**
         *
         * Group property to use as a unique identifier to group items, e.g. `'country.id'`.
         * **Note**: `items` should be an object array.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#groupvaluefield).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.groupValueField = null;
        /**
         * Group property to display, e.g. `'country.name'`.
         * **Note**: `items` should be an object array.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#grouptextfield).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.groupTextField = null;
        /**
         * Determines whether to show Searchbar.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#cansearch).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.canSearch = false;
        /**
         * Determines whether Ionic [InfiniteScroll](https://ionicframework.com/docs/api/components/infinite-scroll/InfiniteScroll/) is enabled.
         * **Note**: Infinite scroll cannot be used together with virtual scroll.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasinfinitescroll).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.hasInfiniteScroll = false;
        /**
         * Determines whether Ionic [VirtualScroll](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/) is enabled.
         * **Note**: Virtual scroll cannot be used together with infinite scroll.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasvirtualscroll).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.hasVirtualScroll = false;
        /**
         * See Ionic VirtualScroll [approxItemHeight](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/).
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#virtualscrollapproxitemheight).
         *
         * \@default '40px'
         * \@memberof IonicSelectableComponent
         */
        this.virtualScrollApproxItemHeight = '40px';
        /**
         * A placeholder for Searchbar.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchplaceholder).
         *
         * \@default 'Search'
         * \@memberof IonicSelectableComponent
         */
        this.searchPlaceholder = 'Search';
        /**
         * A placeholder.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#placeholder).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.placeholder = null;
        /**
         * Text to display when no items have been found during search.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchfailtext).
         *
         * \@default 'No items found.'
         * \@memberof IonicSelectableComponent
         */
        this.searchFailText = 'No items found.';
        /**
         * Clear button text.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#clearbuttontext).
         *
         * \@default 'Clear'
         * \@memberof IonicSelectableComponent
         */
        this.clearButtonText = 'Clear';
        /**
         * Add button text.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#addbuttontext).
         *
         * \@default 'Add'
         * \@memberof IonicSelectableComponent
         */
        this.addButtonText = 'Add';
        /**
         * Confirm button text.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#confirmbuttontext).
         *
         * \@default 'OK'
         * \@memberof IonicSelectableComponent
         */
        this.confirmButtonText = 'OK';
        /**
         * Close button text.
         * The field is only applicable to **iOS** platform, on **Android** only Cross icon is displayed.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#closebuttontext).
         *
         * \@default 'Cancel'
         * \@memberof IonicSelectableComponent
         */
        this.closeButtonText = 'Cancel';
        /**
         * Determines whether Searchbar should receive focus when Modal is opened.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldfocussearchbar).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.shouldFocusSearchbar = false;
        /**
         * Header color. [Ionic colors](https://ionicframework.com/docs/theming/advanced#colors) are supported.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#headercolor).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.headerColor = null;
        /**
         * Group color. [Ionic colors](https://ionicframework.com/docs/theming/advanced#colors) are supported.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#groupcolor).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.groupColor = null;
        /**
         * Close button slot. [Ionic slots](https://ionicframework.com/docs/api/buttons) are supported.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#closebuttonslot).
         *
         * \@default 'start'
         * \@memberof IonicSelectableComponent
         */
        this.closeButtonSlot = 'start';
        /**
         * Item icon slot. [Ionic slots](https://ionicframework.com/docs/api/item) are supported.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemiconslot).
         *
         * \@default 'start'
         * \@memberof IonicSelectableComponent
         */
        this.itemIconSlot = 'start';
        /**
         * Fires when item/s has been selected and Modal closed.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onchange).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onChange = new EventEmitter();
        /**
         * Fires when the user is typing in Searchbar.
         * **Note**: `canSearch` and `isOnSearchEnabled` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearch).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onSearch = new EventEmitter();
        /**
         * Fires when no items have been found.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearchfail).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onSearchFail = new EventEmitter();
        /**
         * Fires when some items have been found.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearchsuccess).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onSearchSuccess = new EventEmitter();
        /**
         * Fires when the user has scrolled to the end of the list.
         * **Note**: `hasInfiniteScroll` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#oninfinitescroll).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onInfiniteScroll = new EventEmitter();
        /**
         * Fires when Modal has been opened.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onopen).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onOpen = new EventEmitter();
        /**
         * Fires when Modal has been closed.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onclose).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onClose = new EventEmitter();
        /**
         * Fires when an item has been selected or unselected.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onselect).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onSelect = new EventEmitter();
        /**
         * Fires when Clear button has been clicked.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onclear).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onClear = new EventEmitter();
        /**
         * How long, in milliseconds, to wait to filter items or to trigger `onSearch` event after each keystroke.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchdebounce).
         *
         * \@default 250
         * \@memberof IonicSelectableComponent
         */
        this.searchDebounce = 250;
        /**
         * A list of items to disable.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#disableditems).
         *
         * \@default []
         * \@memberof IonicSelectableComponent
         */
        this.disabledItems = [];
        /**
         * Determines whether item value only should be stored in `ngModel`, not the entire item.
         * **Note**: Item value is defined by `itemValueField`.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldstoreitemvalue).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.shouldStoreItemValue = false;
        /**
         * Determines whether to allow editing items.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#cansaveitem).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.canSaveItem = false;
        /**
         * Determines whether to allow deleting items.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#candeleteitem).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.canDeleteItem = false;
        /**
         * Fires when Edit item button has been clicked.
         * When the button has been clicked `ionicSelectableAddItemTemplate` will be shown. Use the template to create a form to edit item.
         * **Note**: `canSaveItem` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsaveitem).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onSaveItem = new EventEmitter();
        /**
         * Fires when Delete item button has been clicked.
         * **Note**: `canDeleteItem` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#ondeleteitem).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onDeleteItem = new EventEmitter();
        /**
         * Fires when Add item button has been clicked.
         * When the button has been clicked `ionicSelectableAddItemTemplate` will be shown. Use the template to create a form to add item.
         * **Note**: `canAddItem` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onadditem).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onAddItem = new EventEmitter();
        /**
         * See Ionic VirtualScroll [headerFn](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/).
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#virtualscrollheaderfn).
         *
         * \@memberof IonicSelectableComponent
         */
        this.virtualScrollHeaderFn = (/**
         * @return {?}
         */
        () => {
            return null;
        });
        this.propagateOnChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this.propagateOnTouched = (/**
         * @return {?}
         */
        () => { });
        if (!this.items || !this.items.length) {
            this.items = [];
        }
        this._itemsDiffer = this._iterableDiffers.find(this.items).create();
    }
    /**
     * @return {?}
     */
    get _isMultipleCssClass() {
        return this.isMultiple;
    }
    /**
     * @return {?}
     */
    get _hasValueCssClass() {
        return this.hasValue();
    }
    /**
     * @return {?}
     */
    get _hasPlaceholderCssClass() {
        return this._hasPlaceholder;
    }
    /**
     * @return {?}
     */
    get _hasIonLabelCssClass() {
        return this._hasIonLabel;
    }
    /**
     * @return {?}
     */
    get _hasDefaultIonLabelCssClass() {
        return this._ionLabelPosition === 'default';
    }
    /**
     * @return {?}
     */
    get _hasFixedIonLabelCssClass() {
        return this._ionLabelPosition === 'fixed';
    }
    /**
     * @return {?}
     */
    get _hasStackedIonLabelCssClass() {
        return this._ionLabelPosition === 'stacked';
    }
    /**
     * @return {?}
     */
    get _hasFloatingIonLabelCssClass() {
        return this._ionLabelPosition === 'floating';
    }
    /**
     * @private
     * @return {?}
     */
    get _hasInfiniteScroll() {
        return this.isEnabled && this._modalComponent &&
            this._modalComponent._infiniteScroll ? true : false;
    }
    /**
     * @return {?}
     */
    get _shouldStoreItemValue() {
        return this.shouldStoreItemValue && this._hasObjects;
    }
    /**
     * Text of [Ionic Label](https://ionicframework.com/docs/api/label).
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#label).
     *
     * \@readonly
     * \@default null
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get label() {
        return this._label;
    }
    /**
     * Text that the user has typed in Searchbar.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchtext).
     *
     * \@readonly
     * \@default ''
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get searchText() {
        return this._searchText;
    }
    /**
     * @param {?} searchText
     * @return {?}
     */
    set searchText(searchText) {
        this._searchText = searchText;
        this._setHasSearchText();
    }
    /**
     * Determines whether search is running.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#issearching).
     *
     * \@default false
     * \@readonly
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get isSearching() {
        return this._isSearching;
    }
    /**
     * Determines whether user has typed anything in Searchbar.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hassearchtext).
     *
     * \@default false
     * \@readonly
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get hasSearchText() {
        return this._hasSearchText;
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
        // Set value items.
        this._valueItems.splice(0, this._valueItems.length);
        if (this.isMultiple) {
            if (value && value.length) {
                Array.prototype.push.apply(this._valueItems, value);
            }
        }
        else {
            if (!this._isNullOrWhiteSpace(value)) {
                this._valueItems.push(value);
            }
        }
        this._setIonItemHasValue();
        this._setHasPlaceholder();
    }
    /**
     * Determines whether the component is enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isenabled).
     *
     * \@default true
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get isEnabled() {
        return this._isEnabled;
    }
    /**
     * @param {?} isEnabled
     * @return {?}
     */
    set isEnabled(isEnabled) {
        this._isEnabled = !!isEnabled;
        this.enableIonItem(this._isEnabled);
    }
    /**
     * Determines whether Modal should be closed when backdrop is clicked.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldbackdropclose).
     *
     * \@default true
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get shouldBackdropClose() {
        return this._shouldBackdropClose;
    }
    /**
     * @param {?} shouldBackdropClose
     * @return {?}
     */
    set shouldBackdropClose(shouldBackdropClose) {
        this._shouldBackdropClose = !!shouldBackdropClose;
    }
    /**
     * Determines whether Modal is opened.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isopened).
     *
     * \@default false
     * \@readonly
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get isOpened() {
        return this._isOpened;
    }
    /**
     * Determines whether Confirm button is visible for single selection.
     * By default Confirm button is visible only for multiple selection.
     * **Note**: It is always true for multiple selection and cannot be changed.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasconfirmbutton).
     *
     * \@default true
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get hasConfirmButton() {
        return this._hasConfirmButton;
    }
    /**
     * @param {?} hasConfirmButton
     * @return {?}
     */
    set hasConfirmButton(hasConfirmButton) {
        this._hasConfirmButton = !!hasConfirmButton;
        this._countFooterButtons();
    }
    /**
     * Determines whether `onSearch` event is enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isonsearchenabled).
     *
     * \@default true
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get isOnSearchEnabled() {
        return this._isOnSearchEnabled;
    }
    /**
     * @param {?} isOnSearchEnabled
     * @return {?}
     */
    set isOnSearchEnabled(isOnSearchEnabled) {
        this._isOnSearchEnabled = !!isOnSearchEnabled;
    }
    /**
     * Determines whether to show Clear button.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#canclear).
     *
     * \@default false
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get canClear() {
        return this._canClear;
    }
    /**
     * @param {?} canClear
     * @return {?}
     */
    set canClear(canClear) {
        this._canClear = !!canClear;
        this._countFooterButtons();
    }
    /**
     * Determines whether multiple items can be selected.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#ismultiple).
     *
     * \@default false
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get isMultiple() {
        return this._isMultiple;
    }
    /**
     * @param {?} isMultiple
     * @return {?}
     */
    set isMultiple(isMultiple) {
        this._isMultiple = !!isMultiple;
        this._countFooterButtons();
    }
    /**
     * A list of items that are selected and awaiting confirmation by user, when he has clicked Confirm button.
     * After the user has clicked Confirm button items to confirm are cleared.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemstoconfirm).
     *
     * \@default []
     * \@readonly
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get itemsToConfirm() {
        return this._itemsToConfirm;
    }
    /**
     * Determines whether to allow adding items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#canadditem).
     *
     * \@default false
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    get canAddItem() {
        return this._canAddItem;
    }
    /**
     * @param {?} canAddItem
     * @return {?}
     */
    set canAddItem(canAddItem) {
        this._canAddItem = !!canAddItem;
        this._countFooterButtons();
    }
    /**
     * @return {?}
     */
    initFocus() { }
    /**
     * @param {?} isEnabled
     * @return {?}
     */
    enableIonItem(isEnabled) {
        if (!this.ionItem) {
            return;
        }
        this.ionItem.disabled = !isEnabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _isNullOrWhiteSpace(value) {
        if (value === null || value === undefined) {
            return true;
        }
        // Convert value to string in case if it's not.
        return value.toString().replace(/\s/g, '').length < 1;
    }
    /**
     * @return {?}
     */
    _setHasSearchText() {
        this._hasSearchText = !this._isNullOrWhiteSpace(this._searchText);
    }
    /**
     * @return {?}
     */
    _hasOnSearch() {
        return this.isOnSearchEnabled && this.onSearch.observers.length > 0;
    }
    /**
     * @return {?}
     */
    _hasOnSaveItem() {
        return this.canSaveItem && this.onSaveItem.observers.length > 0;
    }
    /**
     * @return {?}
     */
    _hasOnAddItem() {
        return this.canAddItem && this.onAddItem.observers.length > 0;
    }
    /**
     * @return {?}
     */
    _hasOnDeleteItem() {
        return this.canDeleteItem && this.onDeleteItem.observers.length > 0;
    }
    /**
     * @return {?}
     */
    _emitValueChange() {
        this.propagateOnChange(this.value);
        this.onChange.emit({
            component: this,
            value: this.value
        });
    }
    /**
     * @return {?}
     */
    _emitSearch() {
        if (!this.canSearch) {
            return;
        }
        this.onSearch.emit({
            component: this,
            text: this._searchText
        });
    }
    /**
     * @param {?} item
     * @param {?} isSelected
     * @return {?}
     */
    _emitOnSelect(item, isSelected) {
        this.onSelect.emit({
            component: this,
            item: item,
            isSelected: isSelected
        });
    }
    /**
     * @param {?} items
     * @return {?}
     */
    _emitOnClear(items) {
        this.onClear.emit({
            component: this,
            items: items
        });
    }
    /**
     * @param {?} isSuccess
     * @return {?}
     */
    _emitOnSearchSuccessOrFail(isSuccess) {
        /** @type {?} */
        const eventData = {
            component: this,
            text: this._searchText
        };
        if (isSuccess) {
            this.onSearchSuccess.emit(eventData);
        }
        else {
            this.onSearchFail.emit(eventData);
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _formatItem(item) {
        if (this._isNullOrWhiteSpace(item)) {
            return null;
        }
        return this.itemTextField ? item[this.itemTextField] : item.toString();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _formatValueItem(item) {
        if (this._shouldStoreItemValue) {
            // Get item text from the list as we store it's value only.
            /** @type {?} */
            const selectedItem = this.items.find((/**
             * @param {?} _item
             * @return {?}
             */
            _item => {
                return _item[this.itemValueField] === item;
            }));
            return this._formatItem(selectedItem);
        }
        else {
            return this._formatItem(item);
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _getItemValue(item) {
        if (!this._hasObjects) {
            return item;
        }
        return item[this.itemValueField];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _getStoredItemValue(item) {
        if (!this._hasObjects) {
            return item;
        }
        return this._shouldStoreItemValue ? item : item[this.itemValueField];
    }
    /**
     * @return {?}
     */
    _onSearchbarClear() {
        // Ionic Searchbar doesn't clear bind with ngModel value.
        // Do it ourselves.
        this._searchText = '';
    }
    /**
     * @return {?}
     */
    _filterItems() {
        this._setHasSearchText();
        if (this._hasOnSearch()) {
            // Delegate filtering to the event.
            this._emitSearch();
        }
        else {
            // Default filtering.
            /** @type {?} */
            let groups = [];
            if (!this._searchText || !this._searchText.trim()) {
                groups = this._groups;
            }
            else {
                /** @type {?} */
                const filterText = this._searchText.trim().toLowerCase();
                this._groups.forEach((/**
                 * @param {?} group
                 * @return {?}
                 */
                group => {
                    /** @type {?} */
                    const items = group.items.filter((/**
                     * @param {?} item
                     * @return {?}
                     */
                    item => {
                        /** @type {?} */
                        const itemText = (this.itemTextField ?
                            item[this.itemTextField] : item).toString().toLowerCase();
                        return itemText.indexOf(filterText) !== -1;
                    }));
                    if (items.length) {
                        groups.push({
                            value: group.value,
                            text: group.text,
                            items: items
                        });
                    }
                }));
                // No items found.
                if (!groups.length) {
                    groups.push({
                        items: []
                    });
                }
            }
            this._filteredGroups = groups;
            this._hasFilteredItems = !this._areGroupsEmpty(groups);
            this._emitOnSearchSuccessOrFail(this._hasFilteredItems);
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _isItemDisabled(item) {
        if (!this.disabledItems) {
            return;
        }
        return this.disabledItems.some((/**
         * @param {?} _item
         * @return {?}
         */
        _item => {
            return this._getItemValue(_item) === this._getItemValue(item);
        }));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _isItemSelected(item) {
        return this._selectedItems.find((/**
         * @param {?} selectedItem
         * @return {?}
         */
        selectedItem => {
            return this._getItemValue(item) === this._getStoredItemValue(selectedItem);
        })) !== undefined;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _addSelectedItem(item) {
        if (this._shouldStoreItemValue) {
            this._selectedItems.push(this._getItemValue(item));
        }
        else {
            this._selectedItems.push(item);
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _deleteSelectedItem(item) {
        /** @type {?} */
        let itemToDeleteIndex;
        this._selectedItems.forEach((/**
         * @param {?} selectedItem
         * @param {?} itemIndex
         * @return {?}
         */
        (selectedItem, itemIndex) => {
            if (this._getItemValue(item) ===
                this._getStoredItemValue(selectedItem)) {
                itemToDeleteIndex = itemIndex;
            }
        }));
        this._selectedItems.splice(itemToDeleteIndex, 1);
    }
    /**
     * @return {?}
     */
    _click() {
        if (!this.isEnabled) {
            return;
        }
        this._label = this._getLabelText();
        this.open().then((/**
         * @return {?}
         */
        () => {
            this.onOpen.emit({
                component: this
            });
        }));
    }
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    _saveItem(event, item) {
        event.stopPropagation();
        this._itemToAdd = item;
        if (this._hasOnSaveItem()) {
            this.onSaveItem.emit({
                component: this,
                item: this._itemToAdd
            });
        }
        else {
            this.showAddItemTemplate();
        }
    }
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    _deleteItemClick(event, item) {
        event.stopPropagation();
        this._itemToAdd = item;
        if (this._hasOnDeleteItem()) {
            // Delegate logic to event.
            this.onDeleteItem.emit({
                component: this,
                item: this._itemToAdd
            });
        }
        else {
            this.deleteItem(this._itemToAdd);
        }
    }
    /**
     * @return {?}
     */
    _addItemClick() {
        if (this._hasOnAddItem()) {
            this.onAddItem.emit({
                component: this
            });
        }
        else {
            this.showAddItemTemplate();
        }
    }
    /**
     * @return {?}
     */
    _positionAddItemTemplate() {
        // Wait for the template to render.
        setTimeout((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const footer = this._modalComponent._element.nativeElement
                .querySelector('.ionic-selectable-add-item-template ion-footer');
            this._addItemTemplateFooterHeight = footer ? `calc(100% - ${footer.offsetHeight}px)` : '100%';
        }), 100);
    }
    /**
     * @return {?}
     */
    _close() {
        this.close().then((/**
         * @return {?}
         */
        () => {
            this.onClose.emit({
                component: this
            });
        }));
        if (!this._hasOnSearch()) {
            this._searchText = '';
            this._setHasSearchText();
        }
    }
    /**
     * @return {?}
     */
    _clear() {
        /** @type {?} */
        const selectedItems = this._selectedItems;
        this.clear();
        this._emitValueChange();
        this._emitOnClear(selectedItems);
        this.close().then((/**
         * @return {?}
         */
        () => {
            this.onClose.emit({
                component: this
            });
        }));
    }
    /**
     * @return {?}
     */
    _getMoreItems() {
        this.onInfiniteScroll.emit({
            component: this,
            text: this._searchText
        });
    }
    /**
     * @param {?} items
     * @return {?}
     */
    _setItemsToConfirm(items) {
        // Return a copy of original array, so it couldn't be changed from outside.
        this._itemsToConfirm = [].concat(items);
    }
    /**
     * @param {?} selectedItem
     * @return {?}
     */
    _doSelect(selectedItem) {
        this.value = selectedItem;
        this._emitValueChange();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _select(item) {
        /** @type {?} */
        const isItemSelected = this._isItemSelected(item);
        if (this.isMultiple) {
            if (isItemSelected) {
                this._deleteSelectedItem(item);
            }
            else {
                this._addSelectedItem(item);
            }
            this._setItemsToConfirm(this._selectedItems);
            // Emit onSelect event after setting items to confirm so they could be used
            // inside the event.
            this._emitOnSelect(item, !isItemSelected);
        }
        else {
            if (this.hasConfirmButton || this.footerTemplate) {
                // Don't close Modal and keep track on items to confirm.
                // When footer template is used it's up to developer to close Modal.
                this._selectedItems = [];
                if (isItemSelected) {
                    this._deleteSelectedItem(item);
                }
                else {
                    this._addSelectedItem(item);
                }
                this._setItemsToConfirm(this._selectedItems);
                // Emit onSelect event after setting items to confirm so they could be used
                // inside the event.
                this._emitOnSelect(item, !isItemSelected);
            }
            else {
                if (!isItemSelected) {
                    this._selectedItems = [];
                    this._addSelectedItem(item);
                    // Emit onSelect before onChange.
                    this._emitOnSelect(item, true);
                    if (this._shouldStoreItemValue) {
                        this._doSelect(this._getItemValue(item));
                    }
                    else {
                        this._doSelect(item);
                    }
                }
                this._close();
            }
        }
    }
    /**
     * @return {?}
     */
    _confirm() {
        this.confirm();
        this._close();
    }
    /**
     * @private
     * @return {?}
     */
    _getLabelText() {
        return this._ionLabelElement ? this._ionLabelElement.textContent : null;
    }
    /**
     * @private
     * @param {?} groups
     * @return {?}
     */
    _areGroupsEmpty(groups) {
        return groups.length === 0 || groups.every((/**
         * @param {?} group
         * @return {?}
         */
        group => {
            return !group.items || group.items.length === 0;
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _countFooterButtons() {
        /** @type {?} */
        let footerButtonsCount = 0;
        if (this.canClear) {
            footerButtonsCount++;
        }
        if (this.isMultiple || this._hasConfirmButton) {
            footerButtonsCount++;
        }
        if (this.canAddItem) {
            footerButtonsCount++;
        }
        this._footerButtonsCount = footerButtonsCount;
    }
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    _setItems(items) {
        // It's important to have an empty starting group with empty items (groups[0].items),
        // because we bind to it when using VirtualScroll.
        // See https://github.com/eakoriakin/ionic-selectable/issues/70.
        /** @type {?} */
        let groups = [{
                items: items || []
            }];
        if (items && items.length) {
            if (this._hasGroups) {
                groups = [];
                items.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => {
                    /** @type {?} */
                    const groupValue = this._getPropertyValue(item, this.groupValueField);
                    /** @type {?} */
                    const group = groups.find((/**
                     * @param {?} _group
                     * @return {?}
                     */
                    _group => _group.value === groupValue));
                    if (group) {
                        group.items.push(item);
                    }
                    else {
                        groups.push({
                            value: groupValue,
                            text: this._getPropertyValue(item, this.groupTextField),
                            items: [item]
                        });
                    }
                }));
            }
        }
        this._groups = groups;
        this._filteredGroups = this._groups;
        this._hasFilteredItems = !this._areGroupsEmpty(this._filteredGroups);
    }
    /**
     * @private
     * @param {?} object
     * @param {?} property
     * @return {?}
     */
    _getPropertyValue(object, property) {
        if (!property) {
            return null;
        }
        return property.split('.').reduce((/**
         * @param {?} _object
         * @param {?} _property
         * @return {?}
         */
        (_object, _property) => {
            return _object ? _object[_property] : null;
        }), object);
    }
    /**
     * @private
     * @param {?} hasFocus
     * @return {?}
     */
    _setIonItemHasFocus(hasFocus) {
        if (!this.ionItem) {
            return;
        }
        // Apply focus CSS class for proper stylying of ion-item/ion-label.
        this._setIonItemCssClass('item-has-focus', hasFocus);
    }
    /**
     * @private
     * @return {?}
     */
    _setIonItemHasValue() {
        if (!this.ionItem) {
            return;
        }
        // Apply value CSS class for proper stylying of ion-item/ion-label.
        this._setIonItemCssClass('item-has-value', this.hasValue());
    }
    /**
     * @private
     * @return {?}
     */
    _setHasPlaceholder() {
        this._hasPlaceholder = !this.hasValue() &&
            (!this._isNullOrWhiteSpace(this.placeholder) || this.placeholderTemplate) ?
            true : false;
    }
    /**
     * @private
     * @param {?} cssClass
     * @param {?} shouldAdd
     * @return {?}
     */
    _setIonItemCssClass(cssClass, shouldAdd) {
        if (!this._ionItemElement) {
            return;
        }
        // Change to Renderer2
        if (shouldAdd) {
            this._renderer.addClass(this._ionItemElement, cssClass);
        }
        else {
            this._renderer.removeClass(this._ionItemElement, cssClass);
        }
    }
    /**
     * @private
     * @param {?} isVisible
     * @return {?}
     */
    _toggleAddItemTemplate(isVisible) {
        // It should be possible to show/hide the template regardless
        // canAddItem or canSaveItem parameters, so we could implement some
        // custom behavior. E.g. adding item when search fails using onSearchFail event.
        if (!this.addItemTemplate) {
            return;
        }
        // To make SaveItemTemplate visible we just position it over list using CSS.
        // We don't hide list with *ngIf or [hidden] to prevent its scroll position.
        this._isAddItemTemplateVisible = isVisible;
        this._isFooterVisible = !isVisible;
    }
    /* ControlValueAccessor */
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
    }
    /**
     * @param {?} method
     * @return {?}
     */
    registerOnChange(method) {
        this.propagateOnChange = method;
    }
    /**
     * @param {?} method
     * @return {?}
     */
    registerOnTouched(method) {
        this.propagateOnTouched = method;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.isEnabled = !isDisabled;
    }
    /* .ControlValueAccessor */
    /**
     * @return {?}
     */
    ngOnInit() {
        this._isIos = this._platform.is('ios');
        this._isMD = !this._isIos;
        this._hasObjects = !this._isNullOrWhiteSpace(this.itemValueField);
        // Grouping is supported for objects only.
        // Ionic VirtualScroll has it's own implementation of grouping.
        this._hasGroups = Boolean(this._hasObjects && this.groupValueField && !this.hasVirtualScroll);
        if (this.ionItem) {
            this._ionItemElement = this._element.nativeElement.closest('ion-item');
            this._setIonItemCssClass('item-interactive', true);
            this._setIonItemCssClass('item-ionic-selectable', true);
            if (this._ionItemElement) {
                this._ionLabelElement = this._ionItemElement.querySelector('ion-label');
                if (this._ionLabelElement) {
                    this._hasIonLabel = true;
                    this._ionLabelPosition = this._ionLabelElement.getAttribute('position') || 'default';
                }
            }
        }
        this.enableIonItem(this.isEnabled);
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        /** @type {?} */
        const itemsChanges = this._itemsDiffer.diff(this.items);
        if (itemsChanges) {
            this._setItems(this.items);
            this.value = this.value;
            this.onItemsChange.emit({
                component: this
            });
        }
    }
    /**
     * Adds item.
     * **Note**: If you want an item to be added to the original array as well use two-way data binding syntax on `[(items)]` field.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#additem).
     *
     * \@memberof IonicSelectableComponent
     * @param {?} item Item to add.
     * @return {?} Promise that resolves when item has been added.
     */
    addItem(item) {
        /** @type {?} */
        const self = this;
        // Adding item triggers onItemsChange.
        // Return a promise that resolves when onItemsChange finishes.
        // We need a promise or user could do something after item has been added,
        // e.g. use search() method to find the added item.
        this.items.unshift(item);
        // Close any running subscription.
        if (this._addItemObservable) {
            this._addItemObservable.unsubscribe();
        }
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            // Complete callback isn't fired for some reason,
            // so unsubscribe in both success and fail cases.
            self._addItemObservable = self.onItemsChange.asObservable().subscribe((/**
             * @return {?}
             */
            () => {
                self._addItemObservable.unsubscribe();
                resolve();
            }), (/**
             * @return {?}
             */
            () => {
                self._addItemObservable.unsubscribe();
                reject();
            }));
        }));
    }
    /**
     * Deletes item.
     * **Note**: If you want an item to be deleted from the original array as well use two-way data binding syntax on `[(items)]` field.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#deleteitem).
     *
     * \@memberof IonicSelectableComponent
     * @param {?} item Item to delete.
     * @return {?} Promise that resolves when item has been deleted.
     */
    deleteItem(item) {
        /** @type {?} */
        const self = this;
        /** @type {?} */
        let hasValueChanged = false;
        // Remove deleted item from selected items.
        if (this._selectedItems) {
            this._selectedItems = this._selectedItems.filter((/**
             * @param {?} _item
             * @return {?}
             */
            _item => {
                return this._getItemValue(item) !== this._getStoredItemValue(_item);
            }));
        }
        // Remove deleted item from value.
        if (this.value) {
            if (this.isMultiple) {
                /** @type {?} */
                const values = this.value.filter((/**
                 * @param {?} value
                 * @return {?}
                 */
                value => {
                    return value.id !== item.id;
                }));
                if (values.length !== this.value.length) {
                    this.value = values;
                    hasValueChanged = true;
                }
            }
            else {
                if (item === this.value) {
                    this.value = null;
                    hasValueChanged = true;
                }
            }
        }
        if (hasValueChanged) {
            this._emitValueChange();
        }
        // Remove deleted item from list.
        /** @type {?} */
        const items = this.items.filter((/**
         * @param {?} _item
         * @return {?}
         */
        _item => {
            return _item.id !== item.id;
        }));
        // Refresh items on parent component.
        this.itemsChange.emit(items);
        // Refresh list.
        this._setItems(items);
        this.onItemsChange.emit({
            component: this
        });
        // Close any running subscription.
        if (this._deleteItemObservable) {
            this._deleteItemObservable.unsubscribe();
        }
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            // Complete callback isn't fired for some reason,
            // so unsubscribe in both success and fail cases.
            self._deleteItemObservable = self.onItemsChange.asObservable().subscribe((/**
             * @return {?}
             */
            () => {
                self._deleteItemObservable.unsubscribe();
                resolve();
            }), (/**
             * @return {?}
             */
            () => {
                self._deleteItemObservable.unsubscribe();
                reject();
            }));
        }));
    }
    /**
     * Determines whether any item has been selected.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasvalue).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} A boolean determining whether any item has been selected.
     */
    hasValue() {
        if (this.isMultiple) {
            return this._valueItems.length !== 0;
        }
        else {
            return this._valueItems.length !== 0 && !this._isNullOrWhiteSpace(this._valueItems[0]);
        }
    }
    /**
     * Opens Modal.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#open).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} Promise that resolves when Modal has been opened.
     */
    open() {
        /** @type {?} */
        const self = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            if (!self._isEnabled || self._isOpened) {
                reject('IonicSelectable is disabled or already opened.');
                return;
            }
            self._filterItems();
            self._isOpened = true;
            /** @type {?} */
            const modalOptions = {
                component: IonicSelectableModalComponent,
                componentProps: { selectComponent: self },
                backdropDismiss: self._shouldBackdropClose
            };
            if (self.modalCssClass) {
                modalOptions.cssClass = self.modalCssClass;
            }
            if (self.modalEnterAnimation) {
                modalOptions.enterAnimation = self.modalEnterAnimation;
            }
            if (self.modalLeaveAnimation) {
                modalOptions.leaveAnimation = self.modalLeaveAnimation;
            }
            self._modalController.create(modalOptions).then((/**
             * @param {?} modal
             * @return {?}
             */
            modal => {
                self._modal = modal;
                modal.present().then((/**
                 * @return {?}
                 */
                () => {
                    // Set focus after Modal has opened to avoid flickering of focus highlighting
                    // before Modal opening.
                    self._setIonItemHasFocus(true);
                    resolve();
                }));
                modal.onWillDismiss().then((/**
                 * @return {?}
                 */
                () => {
                    self._setIonItemHasFocus(false);
                }));
                modal.onDidDismiss().then((/**
                 * @param {?} event
                 * @return {?}
                 */
                event => {
                    self._isOpened = false;
                    self._itemsToConfirm = [];
                    // Closed by clicking on backdrop outside modal.
                    if (event.role === 'backdrop') {
                        self.onClose.emit({
                            component: self
                        });
                    }
                }));
            }));
        }));
    }
    /**
     * Closes Modal.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#close).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} Promise that resolves when Modal has been closed.
     */
    close() {
        /** @type {?} */
        const self = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            if (!self._isEnabled || !self._isOpened) {
                reject('IonicSelectable is disabled or already closed.');
                return;
            }
            self.propagateOnTouched();
            self._isOpened = false;
            self._itemToAdd = null;
            self._modal.dismiss().then((/**
             * @return {?}
             */
            () => {
                self._setIonItemHasFocus(false);
                self.hideAddItemTemplate();
                resolve();
            }));
        }));
    }
    /**
     * Clears value.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#clear).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    clear() {
        this.value = this.isMultiple ? [] : null;
        this._itemsToConfirm = [];
        this.propagateOnChange(this.value);
    }
    /**
     * Confirms selected items by updating value.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#confirm).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    confirm() {
        if (this.isMultiple) {
            this._doSelect(this._selectedItems);
        }
        else if (this.hasConfirmButton || this.footerTemplate) {
            this._doSelect(this._selectedItems[0] || null);
        }
    }
    /**
     * Selects or deselects all or specific items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#toggleitems).
     *
     * \@memberof IonicSelectableComponent
     * @param {?} isSelect Determines whether to select or deselect items.
     * @param {?=} items
     * @return {?}
     */
    toggleItems(isSelect, items) {
        if (isSelect) {
            /** @type {?} */
            const hasItems = items && items.length;
            /** @type {?} */
            let itemsToToggle = this._groups.reduce((/**
             * @param {?} allItems
             * @param {?} group
             * @return {?}
             */
            (allItems, group) => {
                return allItems.concat(group.items);
            }), []);
            // Don't allow to select all items in single mode.
            if (!this.isMultiple && !hasItems) {
                itemsToToggle = [];
            }
            // Toggle specific items.
            if (hasItems) {
                itemsToToggle = itemsToToggle.filter((/**
                 * @param {?} itemToToggle
                 * @return {?}
                 */
                itemToToggle => {
                    return items.find((/**
                     * @param {?} item
                     * @return {?}
                     */
                    item => {
                        return this._getItemValue(itemToToggle) === this._getItemValue(item);
                    })) !== undefined;
                }));
                // Take the first item for single mode.
                if (!this.isMultiple) {
                    itemsToToggle.splice(0, 1);
                }
            }
            itemsToToggle.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                this._addSelectedItem(item);
            }));
        }
        else {
            this._selectedItems = [];
        }
        this._setItemsToConfirm(this._selectedItems);
    }
    /**
     * Scrolls to the top of Modal content.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#scrolltotop).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} Promise that resolves when scroll has been completed.
     */
    scrollToTop() {
        /** @type {?} */
        const self = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            if (!self._isOpened) {
                reject('IonicSelectable content cannot be scrolled.');
                return;
            }
            self._modalComponent._content.scrollToTop().then((/**
             * @return {?}
             */
            () => {
                resolve();
            }));
        }));
    }
    /**
     * Scrolls to the bottom of Modal content.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#scrolltobottom).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} Promise that resolves when scroll has been completed.
     */
    scrollToBottom() {
        /** @type {?} */
        const self = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            if (!self._isOpened) {
                reject('IonicSelectable content cannot be scrolled.');
                return;
            }
            self._modalComponent._content.scrollToBottom().then((/**
             * @return {?}
             */
            () => {
                resolve();
            }));
        }));
    }
    /**
     * Starts search process by showing Loading spinner.
     * Use it together with `onSearch` event to indicate search start.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#startsearch).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    startSearch() {
        if (!this._isEnabled) {
            return;
        }
        this.showLoading();
    }
    /**
     * Ends search process by hiding Loading spinner and refreshing items.
     * Use it together with `onSearch` event to indicate search end.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#endsearch).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    endSearch() {
        if (!this._isEnabled) {
            return;
        }
        this.hideLoading();
        // When inside Ionic Modal and onSearch event is used,
        // ngDoCheck() doesn't work as _itemsDiffer fails to detect changes.
        // See https://github.com/eakoriakin/ionic-selectable/issues/44.
        // Refresh items manually.
        this._setItems(this.items);
        this._emitOnSearchSuccessOrFail(this._hasFilteredItems);
    }
    /**
     * Enables infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#enableinfinitescroll).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    enableInfiniteScroll() {
        if (!this._hasInfiniteScroll) {
            return;
        }
        this._modalComponent._infiniteScroll.disabled = false;
    }
    /**
     * Disables infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#disableinfinitescroll).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    disableInfiniteScroll() {
        if (!this._hasInfiniteScroll) {
            return;
        }
        this._modalComponent._infiniteScroll.disabled = true;
    }
    /**
     * Ends infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#endinfinitescroll).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    endInfiniteScroll() {
        if (!this._hasInfiniteScroll) {
            return;
        }
        this._modalComponent._infiniteScroll.complete();
        this._setItems(this.items);
    }
    /**
     * Triggers search of items.
     * **Note**: `canSearch` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#search).
     *
     * \@memberof IonicSelectableComponent
     * @param {?} text Text to search items by.
     * @return {?}
     */
    search(text) {
        if (!this._isEnabled || !this._isOpened || !this.canSearch) {
            return;
        }
        this._searchText = text;
        this._setHasSearchText();
        this._filterItems();
    }
    /**
     * Shows Loading spinner.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#showloading).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    showLoading() {
        if (!this._isEnabled) {
            return;
        }
        this._isSearching = true;
    }
    /**
     * Hides Loading spinner.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hideloading).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    hideLoading() {
        if (!this._isEnabled) {
            return;
        }
        this._isSearching = false;
    }
    /**
     * Shows `ionicSelectableAddItemTemplate`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#showadditemtemplate).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    showAddItemTemplate() {
        this._toggleAddItemTemplate(true);
        // Position the template only when it shous up.
        this._positionAddItemTemplate();
    }
    /**
     * Hides `ionicSelectableAddItemTemplate`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hideadditemtemplate).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    hideAddItemTemplate() {
        // Clean item to add as it's no longer needed once Add Item Modal has been closed.
        this._itemToAdd = null;
        this._toggleAddItemTemplate(false);
    }
}
IonicSelectableComponent.decorators = [
    { type: Component, args: [{
                selector: 'ionic-selectable',
                template: "<div class=\"ionic-selectable-inner\">\n  <div class=\"ionic-selectable-value\">\n    <div *ngIf=\"valueTemplate && _valueItems.length && isMultiple\"\n      [ngTemplateOutlet]=\"valueTemplate\"\n      [ngTemplateOutletContext]=\"{ value: _valueItems }\">\n    </div>\n    <div class=\"ionic-selectable-value-item\"\n      *ngIf=\"valueTemplate && _valueItems.length && !isMultiple\">\n      <div [ngTemplateOutlet]=\"valueTemplate\"\n        [ngTemplateOutletContext]=\"{ value: _valueItems[0] }\">\n      </div>\n    </div>\n    <span *ngIf=\"!valueTemplate && _valueItems.length\">\n      <div class=\"ionic-selectable-value-item\"\n        *ngFor=\"let valueItem of _valueItems\">\n        {{_formatValueItem(valueItem)}}\n      </div>\n    </span>\n    <div *ngIf=\"_hasPlaceholder && placeholderTemplate\"\n      class=\"ionic-selectable-value-item\">\n      <div [ngTemplateOutlet]=\"placeholderTemplate\">\n      </div>\n    </div>\n    <div class=\"ionic-selectable-value-item\"\n      *ngIf=\"_hasPlaceholder && !placeholderTemplate\">\n      {{placeholder}}\n    </div>\n    <!-- Fix icon allignment when there's no value or placeholder. -->\n    <span *ngIf=\"!_valueItems.length && !_hasPlaceholder\">&nbsp;</span>\n  </div>\n  <div *ngIf=\"iconTemplate\" class=\"ionic-selectable-icon-template\">\n      <div [ngTemplateOutlet]=\"iconTemplate\"></div>\n  </div>\n  <div *ngIf=\"!iconTemplate\" class=\"ionic-selectable-icon\">\n    <div class=\"ionic-selectable-icon-inner\"></div>\n  </div>\n  <!-- Need to be type=\"button\" otherwise click event triggers form ngSubmit. -->\n  <button class=\"ionic-selectable-cover\" [disabled]=\"!isEnabled\"\n    (click)=\"_click()\" type=\"button\">\n  </button>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => IonicSelectableComponent)),
                        multi: true
                    }],
                styles: [".item-ionic-selectable .item-inner .input-wrapper{align-items:normal}.item-ionic-selectable ion-label{flex:1;max-width:initial}.ionic-selectable{display:block;max-width:45%}.ionic-selectable-inner{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:flex-end}.ionic-selectable-has-placeholder .ionic-selectable-value-item{color:var(--placeholder-color,#999)}.ionic-selectable-value{flex:1;padding-top:13px;padding-bottom:13px;overflow:hidden}.ionic-selectable-value-item{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.ionic-selectable-value-item:not(:last-child){margin-bottom:5px}.ionic-selectable-icon{position:relative;width:20px}.ionic-selectable-icon-inner{position:absolute;top:20px;left:5px;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;pointer-events:none;color:var(--icon-color,#999)}.ionic-selectable-icon-template{-ms-grid-row-align:center;align-self:center;margin-left:5px}.ionic-selectable-ios .ionic-selectable-value{padding-top:11px;padding-bottom:11px}.ionic-selectable-ios .ionic-selectable-icon-inner{top:19px}.ionic-selectable-spinner{position:fixed;bottom:0;top:0;left:0;right:0;z-index:1}.ionic-selectable-spinner-background{top:0;bottom:0;left:0;right:0;position:absolute;background-color:#000;opacity:.05}.ionic-selectable-spinner ion-spinner{position:absolute;top:50%;left:50%;z-index:10;margin-top:-14px;margin-left:-14px}.ionic-selectable-cover{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0}.ionic-selectable-add-item-template{position:fixed;bottom:0;left:0;right:0;background-color:#fff}.ionic-selectable-add-item-template-inner{overflow-y:auto}.ionic-selectable-add-item-template-inner>ion-footer{bottom:0;position:absolute}.ionic-selectable:not(.ionic-selectable-has-label){max-width:100%;width:100%}.ionic-selectable:not(.ionic-selectable-has-label)-value-item{text-align:right}.ionic-selectable-label-floating,.ionic-selectable-label-stacked{-ms-grid-row-align:stretch;align-self:stretch;max-width:100%;padding-left:0;padding-top:8px;padding-bottom:8px}.ionic-selectable-label-floating .ionic-selectable-value,.ionic-selectable-label-stacked .ionic-selectable-value{padding-top:0;padding-bottom:0;min-height:19px}.ionic-selectable-label-floating .ionic-selectable-icon-inner,.ionic-selectable-label-stacked .ionic-selectable-icon-inner{top:7px}.ionic-selectable-label-floating.ionic-selectable-ios .ionic-selectable-value,.ionic-selectable-label-stacked.ionic-selectable-ios .ionic-selectable-value{padding-top:0;padding-bottom:0;min-height:20px}.ionic-selectable-label-floating.ionic-selectable-ios .ionic-selectable-icon-inner,.ionic-selectable-label-stacked.ionic-selectable-ios .ionic-selectable-icon-inner{top:8px}.ionic-selectable-label-default .ionic-selectable-value,.ionic-selectable-label-fixed .ionic-selectable-value{padding-left:var(--padding-start,16px)}.ionic-selectable-label-fixed:not(.ionic-selectable-has-value) .ionic-selectable-value{padding-left:calc(var(--padding-start,$padding) + 11px)}.ionic-selectable-modal .ionic-selectable-group ion-item-divider{padding-right:16px}.ionic-selectable-modal .ionic-selectable-item-button{margin-left:8px;margin-right:8px}.ionic-selectable-modal-ios .ionic-selectable-message{padding:8px}.ionic-selectable-modal-ios .ionic-selectable-group ion-item-divider{padding-right:8px}.ionic-selectable-modal-md .ionic-selectable-message{padding:8px 12px}.ionic-selectable-modal.ionic-selectable-modal-can-clear.ionic-selectable-modal-is-multiple .footer .col:first-child{padding-right:8px}.ionic-selectable-modal.ionic-selectable-modal-can-clear.ionic-selectable-modal-is-multiple .footer .col:last-child{padding-left:8px}.ionic-selectable-modal.ionic-selectable-modal-is-add-item-template-visible>.content>.scroll-content,.ionic-selectable-modal.ionic-selectable-modal-is-searching .scroll-content{overflow-y:hidden}.ionic-selectable-modal ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top,0)}"]
            }] }
];
/** @nocollapse */
IonicSelectableComponent.ctorParameters = () => [
    { type: ModalController },
    { type: Platform },
    { type: IonItem, decorators: [{ type: Optional }] },
    { type: IterableDiffers },
    { type: ElementRef },
    { type: Renderer2 }
];
IonicSelectableComponent.propDecorators = {
    _cssClass: [{ type: HostBinding, args: ['class.ionic-selectable',] }],
    _isIos: [{ type: HostBinding, args: ['class.ionic-selectable-ios',] }],
    _isMD: [{ type: HostBinding, args: ['class.ionic-selectable-md',] }],
    _isMultipleCssClass: [{ type: HostBinding, args: ['class.ionic-selectable-is-multiple',] }],
    _hasValueCssClass: [{ type: HostBinding, args: ['class.ionic-selectable-has-value',] }],
    _hasPlaceholderCssClass: [{ type: HostBinding, args: ['class.ionic-selectable-has-placeholder',] }],
    _hasIonLabelCssClass: [{ type: HostBinding, args: ['class.ionic-selectable-has-label',] }],
    _hasDefaultIonLabelCssClass: [{ type: HostBinding, args: ['class.ionic-selectable-label-default',] }],
    _hasFixedIonLabelCssClass: [{ type: HostBinding, args: ['class.ionic-selectable-label-fixed',] }],
    _hasStackedIonLabelCssClass: [{ type: HostBinding, args: ['class.ionic-selectable-label-stacked',] }],
    _hasFloatingIonLabelCssClass: [{ type: HostBinding, args: ['class.ionic-selectable-label-floating',] }],
    items: [{ type: Input }],
    itemsChange: [{ type: Output }],
    isEnabled: [{ type: HostBinding, args: ['class.ionic-selectable-is-enabled',] }, { type: Input, args: ['isEnabled',] }],
    shouldBackdropClose: [{ type: Input, args: ['shouldBackdropClose',] }],
    modalCssClass: [{ type: Input }],
    modalEnterAnimation: [{ type: Input }],
    modalLeaveAnimation: [{ type: Input }],
    isConfirmButtonEnabled: [{ type: Input }],
    hasConfirmButton: [{ type: Input, args: ['hasConfirmButton',] }],
    itemValueField: [{ type: Input }],
    itemTextField: [{ type: Input }],
    groupValueField: [{ type: Input }],
    groupTextField: [{ type: Input }],
    canSearch: [{ type: Input }],
    isOnSearchEnabled: [{ type: Input, args: ['isOnSearchEnabled',] }],
    canClear: [{ type: HostBinding, args: ['class.ionic-selectable-can-clear',] }, { type: Input, args: ['canClear',] }],
    hasInfiniteScroll: [{ type: Input }],
    hasVirtualScroll: [{ type: Input }],
    virtualScrollApproxItemHeight: [{ type: Input }],
    searchPlaceholder: [{ type: Input }],
    placeholder: [{ type: Input }],
    isMultiple: [{ type: Input, args: ['isMultiple',] }],
    searchFailText: [{ type: Input }],
    clearButtonText: [{ type: Input }],
    addButtonText: [{ type: Input }],
    confirmButtonText: [{ type: Input }],
    closeButtonText: [{ type: Input }],
    shouldFocusSearchbar: [{ type: Input }],
    headerColor: [{ type: Input }],
    groupColor: [{ type: Input }],
    closeButtonSlot: [{ type: Input }],
    itemIconSlot: [{ type: Input }],
    onChange: [{ type: Output }],
    onSearch: [{ type: Output }],
    onSearchFail: [{ type: Output }],
    onSearchSuccess: [{ type: Output }],
    onInfiniteScroll: [{ type: Output }],
    onOpen: [{ type: Output }],
    onClose: [{ type: Output }],
    onSelect: [{ type: Output }],
    onClear: [{ type: Output }],
    searchDebounce: [{ type: Input }],
    disabledItems: [{ type: Input }],
    shouldStoreItemValue: [{ type: Input }],
    canSaveItem: [{ type: Input }],
    canDeleteItem: [{ type: Input }],
    canAddItem: [{ type: Input, args: ['canAddItem',] }],
    onSaveItem: [{ type: Output }],
    onDeleteItem: [{ type: Output }],
    onAddItem: [{ type: Output }],
    valueTemplate: [{ type: ContentChild, args: [IonicSelectableValueTemplateDirective, { read: TemplateRef },] }],
    itemTemplate: [{ type: ContentChild, args: [IonicSelectableItemTemplateDirective, { read: TemplateRef },] }],
    itemEndTemplate: [{ type: ContentChild, args: [IonicSelectableItemEndTemplateDirective, { read: TemplateRef },] }],
    titleTemplate: [{ type: ContentChild, args: [IonicSelectableTitleTemplateDirective, { read: TemplateRef },] }],
    placeholderTemplate: [{ type: ContentChild, args: [IonicSelectablePlaceholderTemplateDirective, { read: TemplateRef },] }],
    messageTemplate: [{ type: ContentChild, args: [IonicSelectableMessageTemplateDirective, { read: TemplateRef },] }],
    groupTemplate: [{ type: ContentChild, args: [IonicSelectableGroupTemplateDirective, { read: TemplateRef },] }],
    groupEndTemplate: [{ type: ContentChild, args: [IonicSelectableGroupEndTemplateDirective, { read: TemplateRef },] }],
    closeButtonTemplate: [{ type: ContentChild, args: [IonicSelectableCloseButtonTemplateDirective, { read: TemplateRef },] }],
    searchFailTemplate: [{ type: ContentChild, args: [IonicSelectableSearchFailTemplateDirective, { read: TemplateRef },] }],
    addItemTemplate: [{ type: ContentChild, args: [IonicSelectableAddItemTemplateDirective, { read: TemplateRef },] }],
    footerTemplate: [{ type: ContentChild, args: [IonicSelectableFooterTemplateDirective, { read: TemplateRef },] }],
    headerTemplate: [{ type: ContentChild, args: [IonicSelectableHeaderTemplateDirective, { read: TemplateRef },] }],
    itemIconTemplate: [{ type: ContentChild, args: [IonicSelectableItemIconTemplateDirective, { read: TemplateRef },] }],
    iconTemplate: [{ type: ContentChild, args: [IonicSelectableIconTemplateDirective, { read: TemplateRef },] }],
    virtualScrollHeaderFn: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    IonicSelectableComponent.prototype._cssClass;
    /** @type {?} */
    IonicSelectableComponent.prototype._isIos;
    /** @type {?} */
    IonicSelectableComponent.prototype._isMD;
    /**
     * @type {?}
     * @private
     */
    IonicSelectableComponent.prototype._isOnSearchEnabled;
    /**
     * @type {?}
     * @private
     */
    IonicSelectableComponent.prototype._isEnabled;
    /**
     * @type {?}
     * @private
     */
    IonicSelectableComponent.prototype._shouldBackdropClose;
    /**
     * @type {?}
     * @private
     */
    IonicSelectableComponent.prototype._isOpened;
    /**
     * @type {?}
     * @private
     */
    IonicSelectableComponent.prototype._value;
    /**
     * @type {?}
     * @private
     */
    IonicSelectableComponent.prototype._modal;
    /**
     * @type {?}
     * @private
     */
    IonicSelectableComponent.prototype._itemsDiffer;
    /**
     * @type {?}
     * @private
     */
    IonicSelectableComponent.prototype._hasObjects;
    /**
     * @type {?}
     * @private
     */
    IonicSelectableComponent.prototype._canClear;
    /**
     * @type {?}
     * @private
     */
    IonicSelectableComponent.prototype._hasConfirmButton;
    /**
     * @type {?}
     * @private
     */
    IonicSelectableComponent.prototype._isMultiple;
    /**
     * @type {?}
     * @private
     */
    IonicSelectableComponent.prototype._canAddItem;
    /**
     * @type {?}
     * @private
     */
    IonicSelectableComponent.prototype._addItemObservable;
    /**
     * @type {?}
     * @private
     */
    IonicSelectableComponent.prototype._deleteItemObservable;
    /**
     * @type {?}
     * @private
     */
    IonicSelectableComponent.prototype.onItemsChange;
    /**
     * @type {?}
     * @private
     */
    IonicSelectableComponent.prototype._ionItemElement;
    /**
     * @type {?}
     * @private
     */
    IonicSelectableComponent.prototype._ionLabelElement;
    /**
     * @type {?}
     * @private
     */
    IonicSelectableComponent.prototype._hasIonLabel;
    /**
     * @type {?}
     * @private
     */
    IonicSelectableComponent.prototype._ionLabelPosition;
    /**
     * @type {?}
     * @private
     */
    IonicSelectableComponent.prototype._label;
    /** @type {?} */
    IonicSelectableComponent.prototype._valueItems;
    /** @type {?} */
    IonicSelectableComponent.prototype._searchText;
    /** @type {?} */
    IonicSelectableComponent.prototype._hasSearchText;
    /** @type {?} */
    IonicSelectableComponent.prototype._groups;
    /** @type {?} */
    IonicSelectableComponent.prototype._itemsToConfirm;
    /** @type {?} */
    IonicSelectableComponent.prototype._selectedItems;
    /** @type {?} */
    IonicSelectableComponent.prototype._modalComponent;
    /** @type {?} */
    IonicSelectableComponent.prototype._filteredGroups;
    /** @type {?} */
    IonicSelectableComponent.prototype._hasGroups;
    /** @type {?} */
    IonicSelectableComponent.prototype._isSearching;
    /** @type {?} */
    IonicSelectableComponent.prototype._hasPlaceholder;
    /** @type {?} */
    IonicSelectableComponent.prototype._isAddItemTemplateVisible;
    /** @type {?} */
    IonicSelectableComponent.prototype._isFooterVisible;
    /** @type {?} */
    IonicSelectableComponent.prototype._itemToAdd;
    /** @type {?} */
    IonicSelectableComponent.prototype._footerButtonsCount;
    /** @type {?} */
    IonicSelectableComponent.prototype._hasFilteredItems;
    /**
     * A list of items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#items).
     *
     * \@default []
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.items;
    /** @type {?} */
    IonicSelectableComponent.prototype.itemsChange;
    /**
     * Modal CSS class.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalcssclass).
     *
     * \@default null
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.modalCssClass;
    /**
     * Modal enter animation.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalenteranimation).
     *
     * \@default null
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.modalEnterAnimation;
    /**
     * Modal leave animation.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalleaveanimation).
     *
     * \@default null
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.modalLeaveAnimation;
    /**
     * Determines whether Confirm button is enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isconfirmbuttonenabled).
     *
     * \@default true
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.isConfirmButtonEnabled;
    /**
     * Item property to use as a unique identifier, e.g, `'id'`.
     * **Note**: `items` should be an object array.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemvaluefield).
     *
     * \@default null
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.itemValueField;
    /**
     * Item property to display, e.g, `'name'`.
     * **Note**: `items` should be an object array.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemtextfield).
     *
     * \@default false
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.itemTextField;
    /**
     *
     * Group property to use as a unique identifier to group items, e.g. `'country.id'`.
     * **Note**: `items` should be an object array.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#groupvaluefield).
     *
     * \@default null
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.groupValueField;
    /**
     * Group property to display, e.g. `'country.name'`.
     * **Note**: `items` should be an object array.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#grouptextfield).
     *
     * \@default null
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.groupTextField;
    /**
     * Determines whether to show Searchbar.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#cansearch).
     *
     * \@default false
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.canSearch;
    /**
     * Determines whether Ionic [InfiniteScroll](https://ionicframework.com/docs/api/components/infinite-scroll/InfiniteScroll/) is enabled.
     * **Note**: Infinite scroll cannot be used together with virtual scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasinfinitescroll).
     *
     * \@default false
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.hasInfiniteScroll;
    /**
     * Determines whether Ionic [VirtualScroll](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/) is enabled.
     * **Note**: Virtual scroll cannot be used together with infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasvirtualscroll).
     *
     * \@default false
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.hasVirtualScroll;
    /**
     * See Ionic VirtualScroll [approxItemHeight](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/).
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#virtualscrollapproxitemheight).
     *
     * \@default '40px'
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.virtualScrollApproxItemHeight;
    /**
     * A placeholder for Searchbar.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchplaceholder).
     *
     * \@default 'Search'
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.searchPlaceholder;
    /**
     * A placeholder.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#placeholder).
     *
     * \@default null
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.placeholder;
    /**
     * Text to display when no items have been found during search.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchfailtext).
     *
     * \@default 'No items found.'
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.searchFailText;
    /**
     * Clear button text.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#clearbuttontext).
     *
     * \@default 'Clear'
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.clearButtonText;
    /**
     * Add button text.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#addbuttontext).
     *
     * \@default 'Add'
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.addButtonText;
    /**
     * Confirm button text.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#confirmbuttontext).
     *
     * \@default 'OK'
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.confirmButtonText;
    /**
     * Close button text.
     * The field is only applicable to **iOS** platform, on **Android** only Cross icon is displayed.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#closebuttontext).
     *
     * \@default 'Cancel'
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.closeButtonText;
    /**
     * Determines whether Searchbar should receive focus when Modal is opened.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldfocussearchbar).
     *
     * \@default false
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.shouldFocusSearchbar;
    /**
     * Header color. [Ionic colors](https://ionicframework.com/docs/theming/advanced#colors) are supported.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#headercolor).
     *
     * \@default null
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.headerColor;
    /**
     * Group color. [Ionic colors](https://ionicframework.com/docs/theming/advanced#colors) are supported.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#groupcolor).
     *
     * \@default null
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.groupColor;
    /**
     * Close button slot. [Ionic slots](https://ionicframework.com/docs/api/buttons) are supported.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#closebuttonslot).
     *
     * \@default 'start'
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.closeButtonSlot;
    /**
     * Item icon slot. [Ionic slots](https://ionicframework.com/docs/api/item) are supported.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemiconslot).
     *
     * \@default 'start'
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.itemIconSlot;
    /**
     * Fires when item/s has been selected and Modal closed.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onchange).
     *
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.onChange;
    /**
     * Fires when the user is typing in Searchbar.
     * **Note**: `canSearch` and `isOnSearchEnabled` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearch).
     *
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.onSearch;
    /**
     * Fires when no items have been found.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearchfail).
     *
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.onSearchFail;
    /**
     * Fires when some items have been found.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearchsuccess).
     *
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.onSearchSuccess;
    /**
     * Fires when the user has scrolled to the end of the list.
     * **Note**: `hasInfiniteScroll` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#oninfinitescroll).
     *
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.onInfiniteScroll;
    /**
     * Fires when Modal has been opened.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onopen).
     *
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.onOpen;
    /**
     * Fires when Modal has been closed.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onclose).
     *
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.onClose;
    /**
     * Fires when an item has been selected or unselected.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onselect).
     *
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.onSelect;
    /**
     * Fires when Clear button has been clicked.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onclear).
     *
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.onClear;
    /**
     * How long, in milliseconds, to wait to filter items or to trigger `onSearch` event after each keystroke.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchdebounce).
     *
     * \@default 250
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.searchDebounce;
    /**
     * A list of items to disable.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#disableditems).
     *
     * \@default []
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.disabledItems;
    /**
     * Determines whether item value only should be stored in `ngModel`, not the entire item.
     * **Note**: Item value is defined by `itemValueField`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldstoreitemvalue).
     *
     * \@default false
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.shouldStoreItemValue;
    /**
     * Determines whether to allow editing items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#cansaveitem).
     *
     * \@default false
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.canSaveItem;
    /**
     * Determines whether to allow deleting items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#candeleteitem).
     *
     * \@default false
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.canDeleteItem;
    /**
     * Fires when Edit item button has been clicked.
     * When the button has been clicked `ionicSelectableAddItemTemplate` will be shown. Use the template to create a form to edit item.
     * **Note**: `canSaveItem` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsaveitem).
     *
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.onSaveItem;
    /**
     * Fires when Delete item button has been clicked.
     * **Note**: `canDeleteItem` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#ondeleteitem).
     *
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.onDeleteItem;
    /**
     * Fires when Add item button has been clicked.
     * When the button has been clicked `ionicSelectableAddItemTemplate` will be shown. Use the template to create a form to add item.
     * **Note**: `canAddItem` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onadditem).
     *
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.onAddItem;
    /** @type {?} */
    IonicSelectableComponent.prototype.valueTemplate;
    /** @type {?} */
    IonicSelectableComponent.prototype.itemTemplate;
    /** @type {?} */
    IonicSelectableComponent.prototype.itemEndTemplate;
    /** @type {?} */
    IonicSelectableComponent.prototype.titleTemplate;
    /** @type {?} */
    IonicSelectableComponent.prototype.placeholderTemplate;
    /** @type {?} */
    IonicSelectableComponent.prototype.messageTemplate;
    /** @type {?} */
    IonicSelectableComponent.prototype.groupTemplate;
    /** @type {?} */
    IonicSelectableComponent.prototype.groupEndTemplate;
    /** @type {?} */
    IonicSelectableComponent.prototype.closeButtonTemplate;
    /** @type {?} */
    IonicSelectableComponent.prototype.searchFailTemplate;
    /** @type {?} */
    IonicSelectableComponent.prototype.addItemTemplate;
    /** @type {?} */
    IonicSelectableComponent.prototype.footerTemplate;
    /** @type {?} */
    IonicSelectableComponent.prototype._addItemTemplateFooterHeight;
    /** @type {?} */
    IonicSelectableComponent.prototype.headerTemplate;
    /** @type {?} */
    IonicSelectableComponent.prototype.itemIconTemplate;
    /** @type {?} */
    IonicSelectableComponent.prototype.iconTemplate;
    /**
     * See Ionic VirtualScroll [headerFn](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/).
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#virtualscrollheaderfn).
     *
     * \@memberof IonicSelectableComponent
     * @type {?}
     */
    IonicSelectableComponent.prototype.virtualScrollHeaderFn;
    /**
     * @type {?}
     * @private
     */
    IonicSelectableComponent.prototype.propagateOnChange;
    /**
     * @type {?}
     * @private
     */
    IonicSelectableComponent.prototype.propagateOnTouched;
    /**
     * @type {?}
     * @private
     */
    IonicSelectableComponent.prototype._modalController;
    /**
     * @type {?}
     * @private
     */
    IonicSelectableComponent.prototype._platform;
    /**
     * @type {?}
     * @private
     */
    IonicSelectableComponent.prototype.ionItem;
    /**
     * @type {?}
     * @private
     */
    IonicSelectableComponent.prototype._iterableDiffers;
    /**
     * @type {?}
     * @private
     */
    IonicSelectableComponent.prototype._element;
    /**
     * @type {?}
     * @private
     */
    IonicSelectableComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc2VsZWN0YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb25pYy1zZWxlY3RhYmxlLyIsInNvdXJjZXMiOlsic3JjL2FwcC9jb21wb25lbnRzL2lvbmljLXNlbGVjdGFibGUvaW9uaWMtc2VsZWN0YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBVyxVQUFVLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFrQixlQUFlLEVBQVUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pPLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdwRSxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN6RyxPQUFPLEVBQUUsMkNBQTJDLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNqSCxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RyxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRyxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNwRyxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RyxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN6RyxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRyxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNsRyxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN4RyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNuRixPQUFPLEVBQUUsMkNBQTJDLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNoSCxPQUFPLEVBQUUsMENBQTBDLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMvRyxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNwRyxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNwRyxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQWFsRyxNQUFNLE9BQU8sd0JBQXdCOzs7Ozs7Ozs7SUE4dkJuQyxZQUNVLGdCQUFpQyxFQUNqQyxTQUFtQixFQUNQLE9BQWdCLEVBQzVCLGdCQUFpQyxFQUNqQyxRQUFvQixFQUNwQixTQUFvQjtRQUxwQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDUCxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQzVCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakMsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQUNwQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBbHdCOUIsY0FBUyxHQUFHLElBQUksQ0FBQztRQXFDVCx1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDMUIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQix5QkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDNUIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixXQUFNLEdBQVEsSUFBSSxDQUFDO1FBSW5CLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBR3BCLGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHdEQsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsc0JBQWlCLEdBQXdELElBQUksQ0FBQztRQUM5RSxXQUFNLEdBQVcsSUFBSSxDQUFDO1FBUTlCLGdCQUFXLEdBQVUsRUFBRSxDQUFDO1FBQ3hCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLFlBQU8sR0FBVSxFQUFFLENBQUM7UUFDcEIsb0JBQWUsR0FBVSxFQUFFLENBQUM7UUFDNUIsbUJBQWMsR0FBVSxFQUFFLENBQUM7UUFFM0Isb0JBQWUsR0FBVSxFQUFFLENBQUM7UUFJNUIsOEJBQXlCLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixlQUFVLEdBQVEsSUFBSSxDQUFDO1FBQ3ZCLHdCQUFtQixHQUFHLENBQUMsQ0FBQztRQUN4QixzQkFBaUIsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7O1FBcUYxQixVQUFLLEdBQVUsRUFBRSxDQUFDO1FBRWxCLGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7Ozs7Ozs7O1FBMENwRCxrQkFBYSxHQUFXLElBQUksQ0FBQzs7Ozs7Ozs7UUFVN0Isd0JBQW1CLEdBQXFCLElBQUksQ0FBQzs7Ozs7Ozs7UUFVN0Msd0JBQW1CLEdBQXFCLElBQUksQ0FBQzs7Ozs7Ozs7UUFzQjdDLDJCQUFzQixHQUFHLElBQUksQ0FBQzs7Ozs7Ozs7O1FBNkI5QixtQkFBYyxHQUFXLElBQUksQ0FBQzs7Ozs7Ozs7O1FBVzlCLGtCQUFhLEdBQVcsSUFBSSxDQUFDOzs7Ozs7Ozs7O1FBWTdCLG9CQUFlLEdBQVcsSUFBSSxDQUFDOzs7Ozs7Ozs7UUFXL0IsbUJBQWMsR0FBVyxJQUFJLENBQUM7Ozs7Ozs7O1FBVTlCLGNBQVMsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7OztRQTJDbEIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDOzs7Ozs7Ozs7UUFXMUIscUJBQWdCLEdBQUcsS0FBSyxDQUFDOzs7Ozs7OztRQVV6QixrQ0FBNkIsR0FBRyxNQUFNLENBQUM7Ozs7Ozs7O1FBVXZDLHNCQUFpQixHQUFHLFFBQVEsQ0FBQzs7Ozs7Ozs7UUFVN0IsZ0JBQVcsR0FBVyxJQUFJLENBQUM7Ozs7Ozs7O1FBMEIzQixtQkFBYyxHQUFHLGlCQUFpQixDQUFDOzs7Ozs7OztRQVVuQyxvQkFBZSxHQUFHLE9BQU8sQ0FBQzs7Ozs7Ozs7UUFVMUIsa0JBQWEsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7O1FBVXRCLHNCQUFpQixHQUFHLElBQUksQ0FBQzs7Ozs7Ozs7O1FBV3pCLG9CQUFlLEdBQUcsUUFBUSxDQUFDOzs7Ozs7OztRQVUzQix5QkFBb0IsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7O1FBVTdCLGdCQUFXLEdBQVcsSUFBSSxDQUFDOzs7Ozs7OztRQVUzQixlQUFVLEdBQVcsSUFBSSxDQUFDOzs7Ozs7OztRQVUxQixvQkFBZSxHQUFHLE9BQU8sQ0FBQzs7Ozs7Ozs7UUFVMUIsaUJBQVksR0FBRyxPQUFPLENBQUM7Ozs7Ozs7UUFTdkIsYUFBUSxHQUFzRSxJQUFJLFlBQVksRUFBRSxDQUFDOzs7Ozs7OztRQVVqRyxhQUFRLEdBQXdFLElBQUksWUFBWSxFQUFFLENBQUM7Ozs7Ozs7UUFTbkcsaUJBQVksR0FBd0UsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7Ozs7OztRQVN2RyxvQkFBZSxHQUF3RSxJQUFJLFlBQVksRUFBRSxDQUFDOzs7Ozs7OztRQVUxRyxxQkFBZ0IsR0FBd0UsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7Ozs7OztRQVMzRyxXQUFNLEdBQTBELElBQUksWUFBWSxFQUFFLENBQUM7Ozs7Ozs7UUFTbkYsWUFBTyxHQUEwRCxJQUFJLFlBQVksRUFBRSxDQUFDOzs7Ozs7O1FBU3BGLGFBQVEsR0FBMEYsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7Ozs7OztRQVNySCxZQUFPLEdBQXdFLElBQUksWUFBWSxFQUFFLENBQUM7Ozs7Ozs7O1FBdUJsRyxtQkFBYyxHQUFXLEdBQUcsQ0FBQzs7Ozs7Ozs7UUFVN0Isa0JBQWEsR0FBVSxFQUFFLENBQUM7Ozs7Ozs7OztRQVcxQix5QkFBb0IsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7O1FBVTdCLGdCQUFXLEdBQUcsS0FBSyxDQUFDOzs7Ozs7OztRQVVwQixrQkFBYSxHQUFHLEtBQUssQ0FBQzs7Ozs7Ozs7O1FBMkJ0QixlQUFVLEdBQXFFLElBQUksWUFBWSxFQUFFLENBQUM7Ozs7Ozs7O1FBVWxHLGlCQUFZLEdBQXFFLElBQUksWUFBWSxFQUFFLENBQUM7Ozs7Ozs7OztRQVdwRyxjQUFTLEdBQTBELElBQUksWUFBWSxFQUFFLENBQUM7Ozs7Ozs7UUF5Q3RGLDBCQUFxQjs7O1FBQUcsR0FBRyxFQUFFO1lBQzNCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxFQUFBO1FBeWVPLHNCQUFpQjs7OztRQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUM7UUFDcEMsdUJBQWtCOzs7UUFBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUM7UUFoZXJDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDakI7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3RFLENBQUM7Ozs7SUFwd0JELElBQ0ksbUJBQW1CO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7O0lBQ0QsSUFDSSxpQkFBaUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUNELElBQ0ksdUJBQXVCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDOzs7O0lBQ0QsSUFDSSxvQkFBb0I7UUFDdEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFDRCxJQUNJLDJCQUEyQjtRQUM3QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxTQUFTLENBQUM7SUFDOUMsQ0FBQzs7OztJQUNELElBQ0kseUJBQXlCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixLQUFLLE9BQU8sQ0FBQztJQUM1QyxDQUFDOzs7O0lBQ0QsSUFDSSwyQkFBMkI7UUFDN0IsT0FBTyxJQUFJLENBQUMsaUJBQWlCLEtBQUssU0FBUyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFDRCxJQUNJLDRCQUE0QjtRQUM5QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxVQUFVLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFxQkQsSUFBWSxrQkFBa0I7UUFDNUIsT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxlQUFlO1lBQzNDLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUN4RCxDQUFDOzs7O0lBQ0QsSUFBSSxxQkFBcUI7UUFDdkIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN2RCxDQUFDOzs7Ozs7Ozs7O0lBMEJELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7Ozs7Ozs7O0lBVUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBQ0QsSUFBSSxVQUFVLENBQUMsVUFBa0I7UUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7Ozs7OztJQVVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7Ozs7Ozs7O0lBVUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUFVO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXBCLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDekIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDckQ7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDOUI7U0FDRjtRQUVELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7Ozs7OztJQXFCRCxJQUVJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFDRCxJQUFJLFNBQVMsQ0FBQyxTQUFrQjtRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7Ozs7O0lBU0QsSUFDSSxtQkFBbUI7UUFDckIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFDRCxJQUFJLG1CQUFtQixDQUFDLG1CQUE0QjtRQUNsRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO0lBQ3BELENBQUM7Ozs7Ozs7Ozs7SUF3Q0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7Ozs7Ozs7O0lBcUJELElBQ0ksZ0JBQWdCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBQ0QsSUFBSSxnQkFBZ0IsQ0FBQyxnQkFBeUI7UUFDNUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM1QyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7Ozs7Ozs7SUFnRUQsSUFDSSxpQkFBaUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFDRCxJQUFJLGlCQUFpQixDQUFDLGlCQUEwQjtRQUM5QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO0lBQ2hELENBQUM7Ozs7Ozs7OztJQVNELElBRUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDOzs7OztJQUNELElBQUksUUFBUSxDQUFDLFFBQWlCO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUM1QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7Ozs7Ozs7SUE2REQsSUFDSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBQ0QsSUFBSSxVQUFVLENBQUMsVUFBbUI7UUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7Ozs7Ozs7O0lBbU1ELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQzs7Ozs7Ozs7O0lBNERELElBQ0ksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOzs7OztJQUNELElBQUksVUFBVSxDQUFDLFVBQW1CO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUNoQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBNEZELFNBQVMsS0FBSyxDQUFDOzs7OztJQUVmLGFBQWEsQ0FBQyxTQUFrQjtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELG1CQUFtQixDQUFDLEtBQVU7UUFDNUIsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDekMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELCtDQUErQztRQUMvQyxPQUFPLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7O0lBRUQsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7OztJQUVELGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5DLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2pCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2xCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDakIsU0FBUyxFQUFFLElBQUk7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDdkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRUQsYUFBYSxDQUFDLElBQVMsRUFBRSxVQUFtQjtRQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNqQixTQUFTLEVBQUUsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJO1lBQ1YsVUFBVSxFQUFFLFVBQVU7U0FDdkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsS0FBWTtRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNoQixTQUFTLEVBQUUsSUFBSTtZQUNmLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCwwQkFBMEIsQ0FBQyxTQUFrQjs7Y0FDckMsU0FBUyxHQUFHO1lBQ2hCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQ3ZCO1FBRUQsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN0QzthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbkM7SUFDSCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxJQUFTO1FBQ25CLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6RSxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLElBQVM7UUFDeEIsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7OztrQkFFeEIsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTs7OztZQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMzQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssSUFBSSxDQUFDO1lBQzdDLENBQUMsRUFBQztZQUVGLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsSUFBUztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsbUJBQW1CLENBQUMsSUFBUztRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2YseURBQXlEO1FBQ3pELG1CQUFtQjtRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRXpCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQ3ZCLG1DQUFtQztZQUNuQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7YUFBTTs7O2dCQUVELE1BQU0sR0FBRyxFQUFFO1lBRWYsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNqRCxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUN2QjtpQkFBTTs7c0JBQ0MsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFO2dCQUV4RCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7Z0JBQUMsS0FBSyxDQUFDLEVBQUU7OzBCQUNyQixLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNOzs7O29CQUFDLElBQUksQ0FBQyxFQUFFOzs4QkFDaEMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDOzRCQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUU7d0JBQzNELE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDN0MsQ0FBQyxFQUFDO29CQUVGLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTt3QkFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQzs0QkFDVixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7NEJBQ2xCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTs0QkFDaEIsS0FBSyxFQUFFLEtBQUs7eUJBQ2IsQ0FBQyxDQUFDO3FCQUNKO2dCQUNILENBQUMsRUFBQyxDQUFDO2dCQUVILGtCQUFrQjtnQkFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7b0JBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUM7d0JBQ1YsS0FBSyxFQUFFLEVBQUU7cUJBQ1YsQ0FBQyxDQUFDO2lCQUNKO2FBQ0Y7WUFFRCxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztZQUM5QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUN6RDtJQUNILENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLElBQVM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkIsT0FBTztTQUNSO1FBRUQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUk7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUNyQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRSxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLElBQVM7UUFDdkIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUk7Ozs7UUFBQyxZQUFZLENBQUMsRUFBRTtZQUM3QyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzdFLENBQUMsRUFBQyxLQUFLLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLElBQVM7UUFDeEIsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7Ozs7O0lBRUQsbUJBQW1CLENBQUMsSUFBUzs7WUFDdkIsaUJBQWlCO1FBRXJCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTzs7Ozs7UUFBQyxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsRUFBRTtZQUN0RCxJQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO2dCQUN4QixJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLEVBQ3RDO2dCQUNBLGlCQUFpQixHQUFHLFNBQVMsQ0FBQzthQUMvQjtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSTs7O1FBQUMsR0FBRyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNmLFNBQVMsRUFBRSxJQUFJO2FBQ2hCLENBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQVksRUFBRSxJQUFTO1FBQy9CLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUV2QixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFDbkIsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVO2FBQ3RCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7OztJQUVELGdCQUFnQixDQUFDLEtBQVksRUFBRSxJQUFTO1FBQ3RDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUV2QixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFO1lBQzNCLDJCQUEyQjtZQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztnQkFDckIsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVO2FBQ3RCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2xCLFNBQVMsRUFBRSxJQUFJO2FBQ2hCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7SUFFRCx3QkFBd0I7UUFDdEIsbUNBQW1DO1FBQ25DLFVBQVU7OztRQUFDLEdBQUcsRUFBRTs7a0JBQ1IsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLGFBQWE7aUJBQ3ZELGFBQWEsQ0FBQyxnREFBZ0QsQ0FBQztZQUVsRSxJQUFJLENBQUMsNEJBQTRCLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxlQUFlLE1BQU0sQ0FBQyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ2hHLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUk7OztRQUFDLEdBQUcsRUFBRTtZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDaEIsU0FBUyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7OztJQUVELE1BQU07O2NBQ0UsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjO1FBRXpDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUk7OztRQUFDLEdBQUcsRUFBRTtZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDaEIsU0FBUyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7WUFDekIsU0FBUyxFQUFFLElBQUk7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDdkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxLQUFZO1FBQzdCLDJFQUEyRTtRQUMzRSxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsWUFBaUI7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUM7UUFDMUIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBUzs7Y0FDVCxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7UUFFakQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksY0FBYyxFQUFFO2dCQUNsQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzdCO1lBRUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUU3QywyRUFBMkU7WUFDM0Usb0JBQW9CO1lBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ2hELHdEQUF3RDtnQkFDeEQsb0VBQW9FO2dCQUNwRSxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztnQkFFekIsSUFBSSxjQUFjLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDaEM7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM3QjtnQkFFRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUU3QywyRUFBMkU7Z0JBQzNFLG9CQUFvQjtnQkFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUMzQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsY0FBYyxFQUFFO29CQUNuQixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztvQkFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO29CQUU1QixpQ0FBaUM7b0JBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUUvQixJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTt3QkFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7cUJBQzFDO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ3RCO2lCQUNGO2dCQUVELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNmO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7OztJQUVPLGFBQWE7UUFDbkIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMxRSxDQUFDOzs7Ozs7SUFFTyxlQUFlLENBQUMsTUFBTTtRQUM1QixPQUFPLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakQsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1FBQ2xELENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTyxtQkFBbUI7O1lBQ3JCLGtCQUFrQixHQUFHLENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLGtCQUFrQixFQUFFLENBQUM7U0FDdEI7UUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzdDLGtCQUFrQixFQUFFLENBQUM7U0FDdEI7UUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsa0JBQWtCLEVBQUUsQ0FBQztTQUN0QjtRQUVELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxrQkFBa0IsQ0FBQztJQUNoRCxDQUFDOzs7Ozs7SUFFTyxTQUFTLENBQUMsS0FBWTs7Ozs7WUFJeEIsTUFBTSxHQUFVLENBQUM7Z0JBQ25CLEtBQUssRUFBRSxLQUFLLElBQUksRUFBRTthQUNuQixDQUFDO1FBRUYsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUN6QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ25CLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBRVosS0FBSyxDQUFDLE9BQU87Ozs7Z0JBQUMsSUFBSSxDQUFDLEVBQUU7OzBCQUNiLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUM7OzBCQUNuRSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUk7Ozs7b0JBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLFVBQVUsRUFBQztvQkFFNUQsSUFBSSxLQUFLLEVBQUU7d0JBQ1QsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ3hCO3lCQUFNO3dCQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUM7NEJBQ1YsS0FBSyxFQUFFLFVBQVU7NEJBQ2pCLElBQUksRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUM7NEJBQ3ZELEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQzt5QkFDZCxDQUFDLENBQUM7cUJBQ0o7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7YUFDSjtTQUNGO1FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7Ozs7SUFFTyxpQkFBaUIsQ0FBQyxNQUFXLEVBQUUsUUFBZ0I7UUFDckQsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTTs7Ozs7UUFBQyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRTtZQUN2RCxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDN0MsQ0FBQyxHQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2IsQ0FBQzs7Ozs7O0lBRU8sbUJBQW1CLENBQUMsUUFBaUI7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBRUQsbUVBQW1FO1FBQ25FLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUVPLG1CQUFtQjtRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixPQUFPO1NBQ1I7UUFFRCxtRUFBbUU7UUFDbkUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBRU8sa0JBQWtCO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3JDLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7WUFDM0UsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQzs7Ozs7OztJQUtPLG1CQUFtQixDQUFDLFFBQWdCLEVBQUUsU0FBa0I7UUFDOUQsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsT0FBTztTQUNSO1FBRUQsc0JBQXNCO1FBQ3RCLElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN6RDthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUM1RDtJQUNILENBQUM7Ozs7OztJQUVPLHNCQUFzQixDQUFDLFNBQWtCO1FBQy9DLDZEQUE2RDtRQUM3RCxtRUFBbUU7UUFDbkUsZ0ZBQWdGO1FBQ2hGLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3pCLE9BQU87U0FDUjtRQUVELDRFQUE0RTtRQUM1RSw0RUFBNEU7UUFDNUUsSUFBSSxDQUFDLHlCQUF5QixHQUFHLFNBQVMsQ0FBQztRQUMzQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBR0QsVUFBVSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxNQUFXO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxNQUFrQjtRQUNsQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLFVBQVUsQ0FBQztJQUMvQixDQUFDOzs7OztJQUdELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2xFLDBDQUEwQztRQUMxQywrREFBK0Q7UUFDL0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFOUYsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFeEQsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUN4QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBRXhFLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztvQkFDekIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksU0FBUyxDQUFDO2lCQUN0RjthQUNGO1NBQ0Y7UUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsU0FBUzs7Y0FDRCxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUV2RCxJQUFJLFlBQVksRUFBRTtZQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFFeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7Z0JBQ3RCLFNBQVMsRUFBRSxJQUFJO2FBQ2hCLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Ozs7Ozs7OztJQVdELE9BQU8sQ0FBQyxJQUFTOztjQUNULElBQUksR0FBRyxJQUFJO1FBRWpCLHNDQUFzQztRQUN0Qyw4REFBOEQ7UUFDOUQsMEVBQTBFO1FBQzFFLG1EQUFtRDtRQUNuRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV6QixrQ0FBa0M7UUFDbEMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3ZDO1FBRUQsT0FBTyxJQUFJLE9BQU87Ozs7O1FBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTTtZQUMxQyxpREFBaUQ7WUFDakQsaURBQWlEO1lBQ2pELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVM7OztZQUFDLEdBQUcsRUFBRTtnQkFDekUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN0QyxPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUM7OztZQUFFLEdBQUcsRUFBRTtnQkFDTixJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3RDLE1BQU0sRUFBRSxDQUFDO1lBQ1gsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7Ozs7SUFXRCxVQUFVLENBQUMsSUFBUzs7Y0FDWixJQUFJLEdBQUcsSUFBSTs7WUFDYixlQUFlLEdBQUcsS0FBSztRQUUzQiwyQ0FBMkM7UUFDM0MsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEUsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUVELGtDQUFrQztRQUNsQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7O3NCQUNiLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7Z0JBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3ZDLE9BQU8sS0FBSyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUM5QixDQUFDLEVBQUM7Z0JBRUYsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO29CQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztvQkFDcEIsZUFBZSxHQUFHLElBQUksQ0FBQztpQkFDeEI7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztvQkFDbEIsZUFBZSxHQUFHLElBQUksQ0FBQztpQkFDeEI7YUFDRjtTQUNGO1FBRUQsSUFBSSxlQUFlLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekI7OztjQUdLLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUN0QyxPQUFPLEtBQUssQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUM5QixDQUFDLEVBQUM7UUFFRixxQ0FBcUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFN0IsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDdEIsU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFDO1FBRUgsa0NBQWtDO1FBQ2xDLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzlCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMxQztRQUVELE9BQU8sSUFBSSxPQUFPOzs7OztRQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU07WUFDMUMsaURBQWlEO1lBQ2pELGlEQUFpRDtZQUNqRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQzVFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDekMsT0FBTyxFQUFFLENBQUM7WUFDWixDQUFDOzs7WUFBRSxHQUFHLEVBQUU7Z0JBQ04sSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN6QyxNQUFNLEVBQUUsQ0FBQztZQUNYLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7OztJQVNELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7U0FDdEM7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4RjtJQUNILENBQUM7Ozs7Ozs7O0lBU0QsSUFBSTs7Y0FDSSxJQUFJLEdBQUcsSUFBSTtRQUVqQixPQUFPLElBQUksT0FBTzs7Ozs7UUFBQyxVQUFVLE9BQU8sRUFBRSxNQUFNO1lBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ3RDLE1BQU0sQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO2dCQUN6RCxPQUFPO2FBQ1I7WUFFRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7O2tCQUVoQixZQUFZLEdBQWlCO2dCQUNqQyxTQUFTLEVBQUUsNkJBQTZCO2dCQUN4QyxjQUFjLEVBQUUsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFO2dCQUN6QyxlQUFlLEVBQUUsSUFBSSxDQUFDLG9CQUFvQjthQUMzQztZQUVELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdEIsWUFBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO2FBQzVDO1lBRUQsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7Z0JBQzVCLFlBQVksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO2FBQ3hEO1lBRUQsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7Z0JBQzVCLFlBQVksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO2FBQ3hEO1lBRUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3RELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSTs7O2dCQUFDLEdBQUcsRUFBRTtvQkFDeEIsNkVBQTZFO29CQUM3RSx3QkFBd0I7b0JBQ3hCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDL0IsT0FBTyxFQUFFLENBQUM7Z0JBQ1osQ0FBQyxFQUFDLENBQUM7Z0JBRUgsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUk7OztnQkFBQyxHQUFHLEVBQUU7b0JBQzlCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbEMsQ0FBQyxFQUFDLENBQUM7Z0JBRUgsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUk7Ozs7Z0JBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO29CQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztvQkFFMUIsZ0RBQWdEO29CQUNoRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO3dCQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzs0QkFDaEIsU0FBUyxFQUFFLElBQUk7eUJBQ2hCLENBQUMsQ0FBQztxQkFDSjtnQkFDSCxDQUFDLEVBQUMsQ0FBQztZQUNMLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7OztJQVNELEtBQUs7O2NBQ0csSUFBSSxHQUFHLElBQUk7UUFFakIsT0FBTyxJQUFJLE9BQU87Ozs7O1FBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTTtZQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ3ZDLE1BQU0sQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO2dCQUN6RCxPQUFPO2FBQ1I7WUFFRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUk7OztZQUFDLEdBQUcsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDM0IsT0FBTyxFQUFFLENBQUM7WUFDWixDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7Ozs7SUFRRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN6QyxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7Ozs7O0lBUUQsT0FBTztRQUNMLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNyQzthQUFNLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQzs7Ozs7Ozs7OztJQVVELFdBQVcsQ0FBQyxRQUFpQixFQUFFLEtBQWE7UUFDMUMsSUFBSSxRQUFRLEVBQUU7O2tCQUNOLFFBQVEsR0FBRyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU07O2dCQUNsQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7OztZQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUMxRCxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RDLENBQUMsR0FBRSxFQUFFLENBQUM7WUFFTixrREFBa0Q7WUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pDLGFBQWEsR0FBRyxFQUFFLENBQUM7YUFDcEI7WUFFRCx5QkFBeUI7WUFDekIsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osYUFBYSxHQUFHLGFBQWEsQ0FBQyxNQUFNOzs7O2dCQUFDLFlBQVksQ0FBQyxFQUFFO29CQUNsRCxPQUFPLEtBQUssQ0FBQyxJQUFJOzs7O29CQUFDLElBQUksQ0FBQyxFQUFFO3dCQUN2QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdkUsQ0FBQyxFQUFDLEtBQUssU0FBUyxDQUFDO2dCQUNuQixDQUFDLEVBQUMsQ0FBQztnQkFFSCx1Q0FBdUM7Z0JBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNwQixhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDNUI7YUFDRjtZQUVELGFBQWEsQ0FBQyxPQUFPOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QixDQUFDLEVBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztTQUMxQjtRQUVELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7Ozs7SUFTRCxXQUFXOztjQUNILElBQUksR0FBRyxJQUFJO1FBRWpCLE9BQU8sSUFBSSxPQUFPOzs7OztRQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU07WUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ25CLE1BQU0sQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO2dCQUN0RCxPQUFPO2FBQ1I7WUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ3BELE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7O0lBU0QsY0FBYzs7Y0FDTixJQUFJLEdBQUcsSUFBSTtRQUVqQixPQUFPLElBQUksT0FBTzs7Ozs7UUFBQyxVQUFVLE9BQU8sRUFBRSxNQUFNO1lBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNuQixNQUFNLENBQUMsNkNBQTZDLENBQUMsQ0FBQztnQkFDdEQsT0FBTzthQUNSO1lBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSTs7O1lBQUMsR0FBRyxFQUFFO2dCQUN2RCxPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7Ozs7SUFTRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7Ozs7OztJQVNELFNBQVM7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkIsc0RBQXNEO1FBQ3RELG9FQUFvRTtRQUNwRSxnRUFBZ0U7UUFDaEUsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7Ozs7OztJQVFELG9CQUFvQjtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEQsQ0FBQzs7Ozs7Ozs7SUFRRCxxQkFBcUI7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZELENBQUM7Ozs7Ozs7O0lBUUQsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7Ozs7Ozs7O0lBVUQsTUFBTSxDQUFDLElBQVk7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUMxRCxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7Ozs7SUFRRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQzs7Ozs7Ozs7SUFRRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQzs7Ozs7Ozs7SUFRRCxtQkFBbUI7UUFDakIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxDLCtDQUErQztRQUMvQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7Ozs7OztJQVFELG1CQUFtQjtRQUNqQixrRkFBa0Y7UUFDbEYsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7OztZQXp5REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLDBzREFBZ0Q7Z0JBRWhELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQzt3QkFDVixPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLHdCQUF3QixFQUFDO3dCQUN2RCxLQUFLLEVBQUUsSUFBSTtxQkFDWixDQUFDOzthQUNIOzs7O1lBOUJpQixlQUFlO1lBQUUsUUFBUTtZQUFsQyxPQUFPLHVCQWd5QlgsUUFBUTtZQWx5QndHLGVBQWU7WUFBekYsVUFBVTtZQUEyRyxTQUFTOzs7d0JBa0N0SyxXQUFXLFNBQUMsd0JBQXdCO3FCQUVwQyxXQUFXLFNBQUMsNEJBQTRCO29CQUV4QyxXQUFXLFNBQUMsMkJBQTJCO2tDQUV2QyxXQUFXLFNBQUMsb0NBQW9DO2dDQUloRCxXQUFXLFNBQUMsa0NBQWtDO3NDQUk5QyxXQUFXLFNBQUMsd0NBQXdDO21DQUlwRCxXQUFXLFNBQUMsa0NBQWtDOzBDQUk5QyxXQUFXLFNBQUMsc0NBQXNDO3dDQUlsRCxXQUFXLFNBQUMsb0NBQW9DOzBDQUloRCxXQUFXLFNBQUMsc0NBQXNDOzJDQUlsRCxXQUFXLFNBQUMsdUNBQXVDO29CQWtJbkQsS0FBSzswQkFFTCxNQUFNO3dCQVVOLFdBQVcsU0FBQyxtQ0FBbUMsY0FDL0MsS0FBSyxTQUFDLFdBQVc7a0NBZ0JqQixLQUFLLFNBQUMscUJBQXFCOzRCQWUzQixLQUFLO2tDQVVMLEtBQUs7a0NBVUwsS0FBSztxQ0FzQkwsS0FBSzsrQkFZTCxLQUFLLFNBQUMsa0JBQWtCOzZCQWlCeEIsS0FBSzs0QkFXTCxLQUFLOzhCQVlMLEtBQUs7NkJBV0wsS0FBSzt3QkFVTCxLQUFLO2dDQVVMLEtBQUssU0FBQyxtQkFBbUI7dUJBZXpCLFdBQVcsU0FBQyxrQ0FBa0MsY0FDOUMsS0FBSyxTQUFDLFVBQVU7Z0NBaUJoQixLQUFLOytCQVdMLEtBQUs7NENBVUwsS0FBSztnQ0FVTCxLQUFLOzBCQVVMLEtBQUs7eUJBVUwsS0FBSyxTQUFDLFlBQVk7NkJBZ0JsQixLQUFLOzhCQVVMLEtBQUs7NEJBVUwsS0FBSztnQ0FVTCxLQUFLOzhCQVdMLEtBQUs7bUNBVUwsS0FBSzswQkFVTCxLQUFLO3lCQVVMLEtBQUs7OEJBVUwsS0FBSzsyQkFVTCxLQUFLO3VCQVNMLE1BQU07dUJBVU4sTUFBTTsyQkFTTixNQUFNOzhCQVNOLE1BQU07K0JBVU4sTUFBTTtxQkFTTixNQUFNO3NCQVNOLE1BQU07dUJBU04sTUFBTTtzQkFTTixNQUFNOzZCQXVCTixLQUFLOzRCQVVMLEtBQUs7bUNBV0wsS0FBSzswQkFVTCxLQUFLOzRCQVVMLEtBQUs7eUJBVUwsS0FBSyxTQUFDLFlBQVk7eUJBaUJsQixNQUFNOzJCQVVOLE1BQU07d0JBV04sTUFBTTs0QkFHTixZQUFZLFNBQUMscUNBQXFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOzJCQUV6RSxZQUFZLFNBQUMsb0NBQW9DLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOzhCQUV4RSxZQUFZLFNBQUMsdUNBQXVDLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOzRCQUUzRSxZQUFZLFNBQUMscUNBQXFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO2tDQUV6RSxZQUFZLFNBQUMsMkNBQTJDLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOzhCQUUvRSxZQUFZLFNBQUMsdUNBQXVDLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOzRCQUUzRSxZQUFZLFNBQUMscUNBQXFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOytCQUV6RSxZQUFZLFNBQUMsd0NBQXdDLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO2tDQUU1RSxZQUFZLFNBQUMsMkNBQTJDLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO2lDQUUvRSxZQUFZLFNBQUMsMENBQTBDLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOzhCQUU5RSxZQUFZLFNBQUMsdUNBQXVDLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOzZCQUUzRSxZQUFZLFNBQUMsc0NBQXNDLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOzZCQUcxRSxZQUFZLFNBQUMsc0NBQXNDLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOytCQUUxRSxZQUFZLFNBQUMsd0NBQXdDLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOzJCQUU1RSxZQUFZLFNBQUMsb0NBQW9DLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO29DQVN4RSxLQUFLOzs7O0lBeHZCTiw2Q0FDaUI7O0lBQ2pCLDBDQUNnQjs7SUFDaEIseUNBQ2U7Ozs7O0lBaUNmLHNEQUFrQzs7Ozs7SUFDbEMsOENBQTBCOzs7OztJQUMxQix3REFBb0M7Ozs7O0lBQ3BDLDZDQUEwQjs7Ozs7SUFDMUIsMENBQTJCOzs7OztJQUMzQiwwQ0FBb0M7Ozs7O0lBQ3BDLGdEQUEwQzs7Ozs7SUFDMUMsK0NBQTZCOzs7OztJQUM3Qiw2Q0FBMEI7Ozs7O0lBQzFCLHFEQUFrQzs7Ozs7SUFDbEMsK0NBQTRCOzs7OztJQUM1QiwrQ0FBNEI7Ozs7O0lBQzVCLHNEQUF5Qzs7Ozs7SUFDekMseURBQTRDOzs7OztJQUM1QyxpREFBOEQ7Ozs7O0lBQzlELG1EQUE2Qjs7Ozs7SUFDN0Isb0RBQThCOzs7OztJQUM5QixnREFBNkI7Ozs7O0lBQzdCLHFEQUFzRjs7Ozs7SUFDdEYsMENBQThCOztJQVE5QiwrQ0FBd0I7O0lBQ3hCLCtDQUFpQjs7SUFDakIsa0RBQXVCOztJQUN2QiwyQ0FBb0I7O0lBQ3BCLG1EQUE0Qjs7SUFDNUIsa0RBQTJCOztJQUMzQixtREFBK0M7O0lBQy9DLG1EQUE0Qjs7SUFDNUIsOENBQW9COztJQUNwQixnREFBc0I7O0lBQ3RCLG1EQUF5Qjs7SUFDekIsNkRBQWtDOztJQUNsQyxvREFBd0I7O0lBQ3hCLDhDQUF1Qjs7SUFDdkIsdURBQXdCOztJQUN4QixxREFBMEI7Ozs7Ozs7OztJQW9GMUIseUNBQ2tCOztJQUNsQiwrQ0FDb0Q7Ozs7Ozs7OztJQXlDcEQsaURBQzZCOzs7Ozs7Ozs7SUFTN0IsdURBQzZDOzs7Ozs7Ozs7SUFTN0MsdURBQzZDOzs7Ozs7Ozs7SUFxQjdDLDBEQUM4Qjs7Ozs7Ozs7OztJQTRCOUIsa0RBQzhCOzs7Ozs7Ozs7O0lBVTlCLGlEQUM2Qjs7Ozs7Ozs7Ozs7SUFXN0IsbURBQytCOzs7Ozs7Ozs7O0lBVS9CLGtEQUM4Qjs7Ozs7Ozs7O0lBUzlCLDZDQUNrQjs7Ozs7Ozs7OztJQTBDbEIscURBQzBCOzs7Ozs7Ozs7O0lBVTFCLG9EQUN5Qjs7Ozs7Ozs7O0lBU3pCLGlFQUN1Qzs7Ozs7Ozs7O0lBU3ZDLHFEQUM2Qjs7Ozs7Ozs7O0lBUzdCLCtDQUMyQjs7Ozs7Ozs7O0lBeUIzQixrREFDbUM7Ozs7Ozs7OztJQVNuQyxtREFDMEI7Ozs7Ozs7OztJQVMxQixpREFDc0I7Ozs7Ozs7OztJQVN0QixxREFDeUI7Ozs7Ozs7Ozs7SUFVekIsbURBQzJCOzs7Ozs7Ozs7SUFTM0Isd0RBQzZCOzs7Ozs7Ozs7SUFTN0IsK0NBQzJCOzs7Ozs7Ozs7SUFTM0IsOENBQzBCOzs7Ozs7Ozs7SUFTMUIsbURBQzBCOzs7Ozs7Ozs7SUFTMUIsZ0RBQ3VCOzs7Ozs7OztJQVF2Qiw0Q0FDaUc7Ozs7Ozs7OztJQVNqRyw0Q0FDbUc7Ozs7Ozs7O0lBUW5HLGdEQUN1Rzs7Ozs7Ozs7SUFRdkcsbURBQzBHOzs7Ozs7Ozs7SUFTMUcsb0RBQzJHOzs7Ozs7OztJQVEzRywwQ0FDbUY7Ozs7Ozs7O0lBUW5GLDJDQUNvRjs7Ozs7Ozs7SUFRcEYsNENBQ3FIOzs7Ozs7OztJQVFySCwyQ0FDa0c7Ozs7Ozs7OztJQXNCbEcsa0RBQzZCOzs7Ozs7Ozs7SUFTN0IsaURBQzBCOzs7Ozs7Ozs7O0lBVTFCLHdEQUM2Qjs7Ozs7Ozs7O0lBUzdCLCtDQUNvQjs7Ozs7Ozs7O0lBU3BCLGlEQUNzQjs7Ozs7Ozs7OztJQTBCdEIsOENBQ2tHOzs7Ozs7Ozs7SUFTbEcsZ0RBQ29HOzs7Ozs7Ozs7O0lBVXBHLDZDQUNzRjs7SUFFdEYsaURBQ2dDOztJQUNoQyxnREFDK0I7O0lBQy9CLG1EQUNrQzs7SUFDbEMsaURBQ2dDOztJQUNoQyx1REFDc0M7O0lBQ3RDLG1EQUNrQzs7SUFDbEMsaURBQ2dDOztJQUNoQyxvREFDbUM7O0lBQ25DLHVEQUNzQzs7SUFDdEMsc0RBQ3FDOztJQUNyQyxtREFDa0M7O0lBQ2xDLGtEQUNpQzs7SUFDakMsZ0VBQXFDOztJQUNyQyxrREFDaUM7O0lBQ2pDLG9EQUNtQzs7SUFDbkMsZ0RBQytCOzs7Ozs7OztJQVEvQix5REFHQzs7Ozs7SUF5ZUQscURBQTRDOzs7OztJQUM1QyxzREFBdUM7Ozs7O0lBdmVyQyxvREFBeUM7Ozs7O0lBQ3pDLDZDQUEyQjs7Ozs7SUFDM0IsMkNBQW9DOzs7OztJQUNwQyxvREFBeUM7Ozs7O0lBQ3pDLDRDQUE0Qjs7Ozs7SUFDNUIsNkNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIERvQ2hlY2ssIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSG9zdEJpbmRpbmcsIElucHV0LCBJdGVyYWJsZURpZmZlciwgSXRlcmFibGVEaWZmZXJzLCBPbkluaXQsIE9wdGlvbmFsLCBPdXRwdXQsIFJlbmRlcmVyMiwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJb25JdGVtLCBNb2RhbENvbnRyb2xsZXIsIFBsYXRmb3JtIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgQW5pbWF0aW9uQnVpbGRlciwgTW9kYWxPcHRpb25zIH0gZnJvbSAnQGlvbmljL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVBZGRJdGVtVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtYWRkLWl0ZW0tdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZUNsb3NlQnV0dG9uVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtY2xvc2UtYnV0dG9uLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVGb290ZXJUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1mb290ZXItdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZUdyb3VwRW5kVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtZ3JvdXAtZW5kLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVHcm91cFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWdyb3VwLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1oZWFkZXItdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZUl0ZW1FbmRUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1pdGVtLWVuZC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlSXRlbUljb25UZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1pdGVtLWljb24tdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZUl0ZW1UZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1pdGVtLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVNZXNzYWdlVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtbWVzc2FnZS10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZVBsYWNlaG9sZGVyVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtcGxhY2Vob2xkZXItdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZVNlYXJjaEZhaWxUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1zZWFyY2gtZmFpbC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlVGl0bGVUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS10aXRsZS10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlVmFsdWVUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS12YWx1ZS10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlSWNvblRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWljb24tdGVtcGxhdGUuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW9uaWMtc2VsZWN0YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pb25pYy1zZWxlY3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW9uaWMtc2VsZWN0YWJsZS5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZVxuICB9XVxufSlcbmV4cG9ydCBjbGFzcyBJb25pY1NlbGVjdGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBEb0NoZWNrIHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1zZWxlY3RhYmxlJylcbiAgX2Nzc0NsYXNzID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1zZWxlY3RhYmxlLWlvcycpXG4gIF9pc0lvczogYm9vbGVhbjtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1zZWxlY3RhYmxlLW1kJylcbiAgX2lzTUQ6IGJvb2xlYW47XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1pcy1tdWx0aXBsZScpXG4gIGdldCBfaXNNdWx0aXBsZUNzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzTXVsdGlwbGU7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1zZWxlY3RhYmxlLWhhcy12YWx1ZScpXG4gIGdldCBfaGFzVmFsdWVDc3NDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5oYXNWYWx1ZSgpO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1oYXMtcGxhY2Vob2xkZXInKVxuICBnZXQgX2hhc1BsYWNlaG9sZGVyQ3NzQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc1BsYWNlaG9sZGVyO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1oYXMtbGFiZWwnKVxuICBnZXQgX2hhc0lvbkxhYmVsQ3NzQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0lvbkxhYmVsO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1sYWJlbC1kZWZhdWx0JylcbiAgZ2V0IF9oYXNEZWZhdWx0SW9uTGFiZWxDc3NDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW9uTGFiZWxQb3NpdGlvbiA9PT0gJ2RlZmF1bHQnO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1sYWJlbC1maXhlZCcpXG4gIGdldCBfaGFzRml4ZWRJb25MYWJlbENzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pb25MYWJlbFBvc2l0aW9uID09PSAnZml4ZWQnO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1sYWJlbC1zdGFja2VkJylcbiAgZ2V0IF9oYXNTdGFja2VkSW9uTGFiZWxDc3NDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW9uTGFiZWxQb3NpdGlvbiA9PT0gJ3N0YWNrZWQnO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1sYWJlbC1mbG9hdGluZycpXG4gIGdldCBfaGFzRmxvYXRpbmdJb25MYWJlbENzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pb25MYWJlbFBvc2l0aW9uID09PSAnZmxvYXRpbmcnO1xuICB9XG4gIHByaXZhdGUgX2lzT25TZWFyY2hFbmFibGVkID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfaXNFbmFibGVkID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfc2hvdWxkQmFja2Ryb3BDbG9zZSA9IHRydWU7XG4gIHByaXZhdGUgX2lzT3BlbmVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3ZhbHVlOiBhbnkgPSBudWxsO1xuICBwcml2YXRlIF9tb2RhbDogSFRNTElvbk1vZGFsRWxlbWVudDtcbiAgcHJpdmF0ZSBfaXRlbXNEaWZmZXI6IEl0ZXJhYmxlRGlmZmVyPGFueT47XG4gIHByaXZhdGUgX2hhc09iamVjdHM6IGJvb2xlYW47XG4gIHByaXZhdGUgX2NhbkNsZWFyID0gZmFsc2U7XG4gIHByaXZhdGUgX2hhc0NvbmZpcm1CdXR0b24gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaXNNdWx0aXBsZSA9IGZhbHNlO1xuICBwcml2YXRlIF9jYW5BZGRJdGVtID0gZmFsc2U7XG4gIHByaXZhdGUgX2FkZEl0ZW1PYnNlcnZhYmxlOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX2RlbGV0ZUl0ZW1PYnNlcnZhYmxlOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgb25JdGVtc0NoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHByaXZhdGUgX2lvbkl0ZW1FbGVtZW50OiBhbnk7XG4gIHByaXZhdGUgX2lvbkxhYmVsRWxlbWVudDogYW55O1xuICBwcml2YXRlIF9oYXNJb25MYWJlbCA9IGZhbHNlO1xuICBwcml2YXRlIF9pb25MYWJlbFBvc2l0aW9uOiAnZml4ZWQnIHwgJ3N0YWNrZWQnIHwgJ2Zsb2F0aW5nJyB8ICdkZWZhdWx0JyB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9sYWJlbDogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBnZXQgX2hhc0luZmluaXRlU2Nyb2xsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzRW5hYmxlZCAmJiB0aGlzLl9tb2RhbENvbXBvbmVudCAmJlxuICAgICAgdGhpcy5fbW9kYWxDb21wb25lbnQuX2luZmluaXRlU2Nyb2xsID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG4gIGdldCBfc2hvdWxkU3RvcmVJdGVtVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hvdWxkU3RvcmVJdGVtVmFsdWUgJiYgdGhpcy5faGFzT2JqZWN0cztcbiAgfVxuICBfdmFsdWVJdGVtczogYW55W10gPSBbXTtcbiAgX3NlYXJjaFRleHQgPSAnJztcbiAgX2hhc1NlYXJjaFRleHQgPSBmYWxzZTtcbiAgX2dyb3VwczogYW55W10gPSBbXTtcbiAgX2l0ZW1zVG9Db25maXJtOiBhbnlbXSA9IFtdO1xuICBfc2VsZWN0ZWRJdGVtczogYW55W10gPSBbXTtcbiAgX21vZGFsQ29tcG9uZW50OiBJb25pY1NlbGVjdGFibGVNb2RhbENvbXBvbmVudDtcbiAgX2ZpbHRlcmVkR3JvdXBzOiBhbnlbXSA9IFtdO1xuICBfaGFzR3JvdXBzOiBib29sZWFuO1xuICBfaXNTZWFyY2hpbmc6IGJvb2xlYW47XG4gIF9oYXNQbGFjZWhvbGRlcjogYm9vbGVhbjtcbiAgX2lzQWRkSXRlbVRlbXBsYXRlVmlzaWJsZSA9IGZhbHNlO1xuICBfaXNGb290ZXJWaXNpYmxlID0gdHJ1ZTtcbiAgX2l0ZW1Ub0FkZDogYW55ID0gbnVsbDtcbiAgX2Zvb3RlckJ1dHRvbnNDb3VudCA9IDA7XG4gIF9oYXNGaWx0ZXJlZEl0ZW1zID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRleHQgb2YgW0lvbmljIExhYmVsXShodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2FwaS9sYWJlbCkuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2xhYmVsKS5cbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgZ2V0IGxhYmVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xuICB9XG5cbiAgLyoqXG4gICAqIFRleHQgdGhhdCB0aGUgdXNlciBoYXMgdHlwZWQgaW4gU2VhcmNoYmFyLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNzZWFyY2h0ZXh0KS5cbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqIEBkZWZhdWx0ICcnXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGdldCBzZWFyY2hUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaFRleHQ7XG4gIH1cbiAgc2V0IHNlYXJjaFRleHQoc2VhcmNoVGV4dDogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQ7XG4gICAgdGhpcy5fc2V0SGFzU2VhcmNoVGV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBzZWFyY2ggaXMgcnVubmluZy5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaXNzZWFyY2hpbmcpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBAcmVhZG9ubHlcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgZ2V0IGlzU2VhcmNoaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc1NlYXJjaGluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdXNlciBoYXMgdHlwZWQgYW55dGhpbmcgaW4gU2VhcmNoYmFyLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNoYXNzZWFyY2h0ZXh0KS5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQHJlYWRvbmx5XG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGdldCBoYXNTZWFyY2hUZXh0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9oYXNTZWFyY2hUZXh0O1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcblxuICAgIC8vIFNldCB2YWx1ZSBpdGVtcy5cbiAgICB0aGlzLl92YWx1ZUl0ZW1zLnNwbGljZSgwLCB0aGlzLl92YWx1ZUl0ZW1zLmxlbmd0aCk7XG5cbiAgICBpZiAodGhpcy5pc011bHRpcGxlKSB7XG4gICAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHRoaXMuX3ZhbHVlSXRlbXMsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLl9pc051bGxPcldoaXRlU3BhY2UodmFsdWUpKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlSXRlbXMucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fc2V0SW9uSXRlbUhhc1ZhbHVlKCk7XG4gICAgdGhpcy5fc2V0SGFzUGxhY2Vob2xkZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGxpc3Qgb2YgaXRlbXMuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2l0ZW1zKS5cbiAgICpcbiAgICogQGRlZmF1bHQgW11cbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgaXRlbXM6IGFueVtdID0gW107XG4gIEBPdXRwdXQoKVxuICBpdGVtc0NoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0aGUgY29tcG9uZW50IGlzIGVuYWJsZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2lzZW5hYmxlZCkuXG4gICAqXG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1zZWxlY3RhYmxlLWlzLWVuYWJsZWQnKVxuICBASW5wdXQoJ2lzRW5hYmxlZCcpXG4gIGdldCBpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzRW5hYmxlZDtcbiAgfVxuICBzZXQgaXNFbmFibGVkKGlzRW5hYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9ICEhaXNFbmFibGVkO1xuICAgIHRoaXMuZW5hYmxlSW9uSXRlbSh0aGlzLl9pc0VuYWJsZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBNb2RhbCBzaG91bGQgYmUgY2xvc2VkIHdoZW4gYmFja2Ryb3AgaXMgY2xpY2tlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jc2hvdWxkYmFja2Ryb3BjbG9zZSkuXG4gICAqXG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCdzaG91bGRCYWNrZHJvcENsb3NlJylcbiAgZ2V0IHNob3VsZEJhY2tkcm9wQ2xvc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3VsZEJhY2tkcm9wQ2xvc2U7XG4gIH1cbiAgc2V0IHNob3VsZEJhY2tkcm9wQ2xvc2Uoc2hvdWxkQmFja2Ryb3BDbG9zZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3VsZEJhY2tkcm9wQ2xvc2UgPSAhIXNob3VsZEJhY2tkcm9wQ2xvc2U7XG4gIH1cblxuICAvKipcbiAgICogTW9kYWwgQ1NTIGNsYXNzLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNtb2RhbGNzc2NsYXNzKS5cbiAgICpcbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBtb2RhbENzc0NsYXNzOiBzdHJpbmcgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBNb2RhbCBlbnRlciBhbmltYXRpb24uXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI21vZGFsZW50ZXJhbmltYXRpb24pLlxuICAgKlxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1vZGFsRW50ZXJBbmltYXRpb246IEFuaW1hdGlvbkJ1aWxkZXIgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBNb2RhbCBsZWF2ZSBhbmltYXRpb24uXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI21vZGFsbGVhdmVhbmltYXRpb24pLlxuICAgKlxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1vZGFsTGVhdmVBbmltYXRpb246IEFuaW1hdGlvbkJ1aWxkZXIgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgTW9kYWwgaXMgb3BlbmVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNpc29wZW5lZCkuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEByZWFkb25seVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBnZXQgaXNPcGVuZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzT3BlbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBDb25maXJtIGJ1dHRvbiBpcyBlbmFibGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNpc2NvbmZpcm1idXR0b25lbmFibGVkKS5cbiAgICpcbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBpc0NvbmZpcm1CdXR0b25FbmFibGVkID0gdHJ1ZTtcblxuICAvKipcbiAqIERldGVybWluZXMgd2hldGhlciBDb25maXJtIGJ1dHRvbiBpcyB2aXNpYmxlIGZvciBzaW5nbGUgc2VsZWN0aW9uLlxuICogQnkgZGVmYXVsdCBDb25maXJtIGJ1dHRvbiBpcyB2aXNpYmxlIG9ubHkgZm9yIG11bHRpcGxlIHNlbGVjdGlvbi5cbiAqICoqTm90ZSoqOiBJdCBpcyBhbHdheXMgdHJ1ZSBmb3IgbXVsdGlwbGUgc2VsZWN0aW9uIGFuZCBjYW5ub3QgYmUgY2hhbmdlZC5cbiAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2hhc2NvbmZpcm1idXR0b24pLlxuICpcbiAqIEBkZWZhdWx0IHRydWVcbiAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAqL1xuICBASW5wdXQoJ2hhc0NvbmZpcm1CdXR0b24nKVxuICBnZXQgaGFzQ29uZmlybUJ1dHRvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGFzQ29uZmlybUJ1dHRvbjtcbiAgfVxuICBzZXQgaGFzQ29uZmlybUJ1dHRvbihoYXNDb25maXJtQnV0dG9uOiBib29sZWFuKSB7XG4gICAgdGhpcy5faGFzQ29uZmlybUJ1dHRvbiA9ICEhaGFzQ29uZmlybUJ1dHRvbjtcbiAgICB0aGlzLl9jb3VudEZvb3RlckJ1dHRvbnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVtIHByb3BlcnR5IHRvIHVzZSBhcyBhIHVuaXF1ZSBpZGVudGlmaWVyLCBlLmcsIGAnaWQnYC5cbiAgICogKipOb3RlKio6IGBpdGVtc2Agc2hvdWxkIGJlIGFuIG9iamVjdCBhcnJheS5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaXRlbXZhbHVlZmllbGQpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGl0ZW1WYWx1ZUZpZWxkOiBzdHJpbmcgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBJdGVtIHByb3BlcnR5IHRvIGRpc3BsYXksIGUuZywgYCduYW1lJ2AuXG4gICAqICoqTm90ZSoqOiBgaXRlbXNgIHNob3VsZCBiZSBhbiBvYmplY3QgYXJyYXkuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2l0ZW10ZXh0ZmllbGQpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBpdGVtVGV4dEZpZWxkOiBzdHJpbmcgPSBudWxsO1xuXG4gIC8qKlxuICAgKlxuICAgKiBHcm91cCBwcm9wZXJ0eSB0byB1c2UgYXMgYSB1bmlxdWUgaWRlbnRpZmllciB0byBncm91cCBpdGVtcywgZS5nLiBgJ2NvdW50cnkuaWQnYC5cbiAgICogKipOb3RlKio6IGBpdGVtc2Agc2hvdWxkIGJlIGFuIG9iamVjdCBhcnJheS5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jZ3JvdXB2YWx1ZWZpZWxkKS5cbiAgICpcbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBncm91cFZhbHVlRmllbGQ6IHN0cmluZyA9IG51bGw7XG5cbiAgLyoqXG4qIEdyb3VwIHByb3BlcnR5IHRvIGRpc3BsYXksIGUuZy4gYCdjb3VudHJ5Lm5hbWUnYC5cbiogKipOb3RlKio6IGBpdGVtc2Agc2hvdWxkIGJlIGFuIG9iamVjdCBhcnJheS5cbiogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jZ3JvdXB0ZXh0ZmllbGQpLlxuKlxuKiBAZGVmYXVsdCBudWxsXG4qIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiovXG4gIEBJbnB1dCgpXG4gIGdyb3VwVGV4dEZpZWxkOiBzdHJpbmcgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gc2hvdyBTZWFyY2hiYXIuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2NhbnNlYXJjaCkuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGNhblNlYXJjaCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgYG9uU2VhcmNoYCBldmVudCBpcyBlbmFibGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNpc29uc2VhcmNoZW5hYmxlZCkuXG4gICAqXG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCdpc09uU2VhcmNoRW5hYmxlZCcpXG4gIGdldCBpc09uU2VhcmNoRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNPblNlYXJjaEVuYWJsZWQ7XG4gIH1cbiAgc2V0IGlzT25TZWFyY2hFbmFibGVkKGlzT25TZWFyY2hFbmFibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNPblNlYXJjaEVuYWJsZWQgPSAhIWlzT25TZWFyY2hFbmFibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0byBzaG93IENsZWFyIGJ1dHRvbi5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jY2FuY2xlYXIpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXNlbGVjdGFibGUtY2FuLWNsZWFyJylcbiAgQElucHV0KCdjYW5DbGVhcicpXG4gIGdldCBjYW5DbGVhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY2FuQ2xlYXI7XG4gIH1cbiAgc2V0IGNhbkNsZWFyKGNhbkNsZWFyOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY2FuQ2xlYXIgPSAhIWNhbkNsZWFyO1xuICAgIHRoaXMuX2NvdW50Rm9vdGVyQnV0dG9ucygpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBJb25pYyBbSW5maW5pdGVTY3JvbGxdKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvYXBpL2NvbXBvbmVudHMvaW5maW5pdGUtc2Nyb2xsL0luZmluaXRlU2Nyb2xsLykgaXMgZW5hYmxlZC5cbiAgICogKipOb3RlKio6IEluZmluaXRlIHNjcm9sbCBjYW5ub3QgYmUgdXNlZCB0b2dldGhlciB3aXRoIHZpcnR1YWwgc2Nyb2xsLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNoYXNpbmZpbml0ZXNjcm9sbCkuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGhhc0luZmluaXRlU2Nyb2xsID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBJb25pYyBbVmlydHVhbFNjcm9sbF0oaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9hcGkvY29tcG9uZW50cy92aXJ0dWFsLXNjcm9sbC9WaXJ0dWFsU2Nyb2xsLykgaXMgZW5hYmxlZC5cbiAgICogKipOb3RlKio6IFZpcnR1YWwgc2Nyb2xsIGNhbm5vdCBiZSB1c2VkIHRvZ2V0aGVyIHdpdGggaW5maW5pdGUgc2Nyb2xsLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNoYXN2aXJ0dWFsc2Nyb2xsKS5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgaGFzVmlydHVhbFNjcm9sbCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBTZWUgSW9uaWMgVmlydHVhbFNjcm9sbCBbYXBwcm94SXRlbUhlaWdodF0oaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9hcGkvY29tcG9uZW50cy92aXJ0dWFsLXNjcm9sbC9WaXJ0dWFsU2Nyb2xsLykuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3ZpcnR1YWxzY3JvbGxhcHByb3hpdGVtaGVpZ2h0KS5cbiAgICpcbiAgICogQGRlZmF1bHQgJzQwcHgnXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHZpcnR1YWxTY3JvbGxBcHByb3hJdGVtSGVpZ2h0ID0gJzQwcHgnO1xuXG4gIC8qKlxuICAgKiBBIHBsYWNlaG9sZGVyIGZvciBTZWFyY2hiYXIuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3NlYXJjaHBsYWNlaG9sZGVyKS5cbiAgICpcbiAgICogQGRlZmF1bHQgJ1NlYXJjaCdcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgc2VhcmNoUGxhY2Vob2xkZXIgPSAnU2VhcmNoJztcblxuICAvKipcbiAgICogQSBwbGFjZWhvbGRlci5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jcGxhY2Vob2xkZXIpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgbXVsdGlwbGUgaXRlbXMgY2FuIGJlIHNlbGVjdGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNpc211bHRpcGxlKS5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCdpc011bHRpcGxlJylcbiAgZ2V0IGlzTXVsdGlwbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzTXVsdGlwbGU7XG4gIH1cbiAgc2V0IGlzTXVsdGlwbGUoaXNNdWx0aXBsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzTXVsdGlwbGUgPSAhIWlzTXVsdGlwbGU7XG4gICAgdGhpcy5fY291bnRGb290ZXJCdXR0b25zKCk7XG4gIH1cblxuICAvKipcbiAgICogVGV4dCB0byBkaXNwbGF5IHdoZW4gbm8gaXRlbXMgaGF2ZSBiZWVuIGZvdW5kIGR1cmluZyBzZWFyY2guXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3NlYXJjaGZhaWx0ZXh0KS5cbiAgICpcbiAgICogQGRlZmF1bHQgJ05vIGl0ZW1zIGZvdW5kLidcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgc2VhcmNoRmFpbFRleHQgPSAnTm8gaXRlbXMgZm91bmQuJztcblxuICAvKipcbiAgICogQ2xlYXIgYnV0dG9uIHRleHQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2NsZWFyYnV0dG9udGV4dCkuXG4gICAqXG4gICAqIEBkZWZhdWx0ICdDbGVhcidcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgY2xlYXJCdXR0b25UZXh0ID0gJ0NsZWFyJztcblxuICAvKipcbiAgICogQWRkIGJ1dHRvbiB0ZXh0LlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNhZGRidXR0b250ZXh0KS5cbiAgICpcbiAgICogQGRlZmF1bHQgJ0FkZCdcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgYWRkQnV0dG9uVGV4dCA9ICdBZGQnO1xuXG4gIC8qKlxuICAgKiBDb25maXJtIGJ1dHRvbiB0ZXh0LlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNjb25maXJtYnV0dG9udGV4dCkuXG4gICAqXG4gICAqIEBkZWZhdWx0ICdPSydcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgY29uZmlybUJ1dHRvblRleHQgPSAnT0snO1xuXG4gIC8qKlxuICAgKiBDbG9zZSBidXR0b24gdGV4dC5cbiAgICogVGhlIGZpZWxkIGlzIG9ubHkgYXBwbGljYWJsZSB0byAqKmlPUyoqIHBsYXRmb3JtLCBvbiAqKkFuZHJvaWQqKiBvbmx5IENyb3NzIGljb24gaXMgZGlzcGxheWVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNjbG9zZWJ1dHRvbnRleHQpLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnQ2FuY2VsJ1xuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBjbG9zZUJ1dHRvblRleHQgPSAnQ2FuY2VsJztcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIFNlYXJjaGJhciBzaG91bGQgcmVjZWl2ZSBmb2N1cyB3aGVuIE1vZGFsIGlzIG9wZW5lZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jc2hvdWxkZm9jdXNzZWFyY2hiYXIpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBzaG91bGRGb2N1c1NlYXJjaGJhciA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBIZWFkZXIgY29sb3IuIFtJb25pYyBjb2xvcnNdKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9hZHZhbmNlZCNjb2xvcnMpIGFyZSBzdXBwb3J0ZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2hlYWRlcmNvbG9yKS5cbiAgICpcbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBoZWFkZXJDb2xvcjogc3RyaW5nID0gbnVsbDtcblxuICAvKipcbiAgICogR3JvdXAgY29sb3IuIFtJb25pYyBjb2xvcnNdKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9hZHZhbmNlZCNjb2xvcnMpIGFyZSBzdXBwb3J0ZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2dyb3VwY29sb3IpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdyb3VwQ29sb3I6IHN0cmluZyA9IG51bGw7XG5cbiAgLyoqXG4gICAqIENsb3NlIGJ1dHRvbiBzbG90LiBbSW9uaWMgc2xvdHNdKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvYXBpL2J1dHRvbnMpIGFyZSBzdXBwb3J0ZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2Nsb3NlYnV0dG9uc2xvdCkuXG4gICAqXG4gICAqIEBkZWZhdWx0ICdzdGFydCdcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgY2xvc2VCdXR0b25TbG90ID0gJ3N0YXJ0JztcblxuICAvKipcbiAgICogSXRlbSBpY29uIHNsb3QuIFtJb25pYyBzbG90c10oaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9hcGkvaXRlbSkgYXJlIHN1cHBvcnRlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaXRlbWljb25zbG90KS5cbiAgICpcbiAgICogQGRlZmF1bHQgJ3N0YXJ0J1xuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBpdGVtSWNvblNsb3QgPSAnc3RhcnQnO1xuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIGl0ZW0vcyBoYXMgYmVlbiBzZWxlY3RlZCBhbmQgTW9kYWwgY2xvc2VkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNvbmNoYW5nZSkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPHsgY29tcG9uZW50OiBJb25pY1NlbGVjdGFibGVDb21wb25lbnQsIHZhbHVlOiBhbnkgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIHVzZXIgaXMgdHlwaW5nIGluIFNlYXJjaGJhci5cbiAgICogKipOb3RlKio6IGBjYW5TZWFyY2hgIGFuZCBgaXNPblNlYXJjaEVuYWJsZWRgIGhhcyB0byBiZSBlbmFibGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNvbnNlYXJjaCkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvblNlYXJjaDogRXZlbnRFbWl0dGVyPHsgY29tcG9uZW50OiBJb25pY1NlbGVjdGFibGVDb21wb25lbnQsIHRleHQ6IHN0cmluZyB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBubyBpdGVtcyBoYXZlIGJlZW4gZm91bmQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI29uc2VhcmNoZmFpbCkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvblNlYXJjaEZhaWw6IEV2ZW50RW1pdHRlcjx7IGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50LCB0ZXh0OiBzdHJpbmcgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gc29tZSBpdGVtcyBoYXZlIGJlZW4gZm91bmQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI29uc2VhcmNoc3VjY2VzcykuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvblNlYXJjaFN1Y2Nlc3M6IEV2ZW50RW1pdHRlcjx7IGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50LCB0ZXh0OiBzdHJpbmcgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIHVzZXIgaGFzIHNjcm9sbGVkIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuXG4gICAqICoqTm90ZSoqOiBgaGFzSW5maW5pdGVTY3JvbGxgIGhhcyB0byBiZSBlbmFibGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNvbmluZmluaXRlc2Nyb2xsKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9uSW5maW5pdGVTY3JvbGw6IEV2ZW50RW1pdHRlcjx7IGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50LCB0ZXh0OiBzdHJpbmcgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gTW9kYWwgaGFzIGJlZW4gb3BlbmVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNvbm9wZW4pLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgb25PcGVuOiBFdmVudEVtaXR0ZXI8eyBjb21wb25lbnQ6IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudCB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBNb2RhbCBoYXMgYmVlbiBjbG9zZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI29uY2xvc2UpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgb25DbG9zZTogRXZlbnRFbWl0dGVyPHsgY29tcG9uZW50OiBJb25pY1NlbGVjdGFibGVDb21wb25lbnQgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gYW4gaXRlbSBoYXMgYmVlbiBzZWxlY3RlZCBvciB1bnNlbGVjdGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNvbnNlbGVjdCkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvblNlbGVjdDogRXZlbnRFbWl0dGVyPHsgY29tcG9uZW50OiBJb25pY1NlbGVjdGFibGVDb21wb25lbnQsIGl0ZW06IGFueSwgaXNTZWxlY3RlZDogYm9vbGVhbiB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBDbGVhciBidXR0b24gaGFzIGJlZW4gY2xpY2tlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jb25jbGVhcikuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvbkNsZWFyOiBFdmVudEVtaXR0ZXI8eyBjb21wb25lbnQ6IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudCwgaXRlbXM6IGFueVtdIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBBIGxpc3Qgb2YgaXRlbXMgdGhhdCBhcmUgc2VsZWN0ZWQgYW5kIGF3YWl0aW5nIGNvbmZpcm1hdGlvbiBieSB1c2VyLCB3aGVuIGhlIGhhcyBjbGlja2VkIENvbmZpcm0gYnV0dG9uLlxuICAgKiBBZnRlciB0aGUgdXNlciBoYXMgY2xpY2tlZCBDb25maXJtIGJ1dHRvbiBpdGVtcyB0byBjb25maXJtIGFyZSBjbGVhcmVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNpdGVtc3RvY29uZmlybSkuXG4gICAqXG4gICAqIEBkZWZhdWx0IFtdXG4gICAqIEByZWFkb25seVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBnZXQgaXRlbXNUb0NvbmZpcm0oKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtc1RvQ29uZmlybTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIb3cgbG9uZywgaW4gbWlsbGlzZWNvbmRzLCB0byB3YWl0IHRvIGZpbHRlciBpdGVtcyBvciB0byB0cmlnZ2VyIGBvblNlYXJjaGAgZXZlbnQgYWZ0ZXIgZWFjaCBrZXlzdHJva2UuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3NlYXJjaGRlYm91bmNlKS5cbiAgICpcbiAgICogQGRlZmF1bHQgMjUwXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNlYXJjaERlYm91bmNlOiBOdW1iZXIgPSAyNTA7XG5cbiAgLyoqXG4gICAqIEEgbGlzdCBvZiBpdGVtcyB0byBkaXNhYmxlLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNkaXNhYmxlZGl0ZW1zKS5cbiAgICpcbiAgICogQGRlZmF1bHQgW11cbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgZGlzYWJsZWRJdGVtczogYW55W10gPSBbXTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIGl0ZW0gdmFsdWUgb25seSBzaG91bGQgYmUgc3RvcmVkIGluIGBuZ01vZGVsYCwgbm90IHRoZSBlbnRpcmUgaXRlbS5cbiAgICogKipOb3RlKio6IEl0ZW0gdmFsdWUgaXMgZGVmaW5lZCBieSBgaXRlbVZhbHVlRmllbGRgLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNzaG91bGRzdG9yZWl0ZW12YWx1ZSkuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNob3VsZFN0b3JlSXRlbVZhbHVlID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0byBhbGxvdyBlZGl0aW5nIGl0ZW1zLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNjYW5zYXZlaXRlbSkuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGNhblNhdmVJdGVtID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0byBhbGxvdyBkZWxldGluZyBpdGVtcy5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jY2FuZGVsZXRlaXRlbSkuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGNhbkRlbGV0ZUl0ZW0gPSBmYWxzZTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGFsbG93IGFkZGluZyBpdGVtcy5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jY2FuYWRkaXRlbSkuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgnY2FuQWRkSXRlbScpXG4gIGdldCBjYW5BZGRJdGVtKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jYW5BZGRJdGVtO1xuICB9XG4gIHNldCBjYW5BZGRJdGVtKGNhbkFkZEl0ZW06IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jYW5BZGRJdGVtID0gISFjYW5BZGRJdGVtO1xuICAgIHRoaXMuX2NvdW50Rm9vdGVyQnV0dG9ucygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gRWRpdCBpdGVtIGJ1dHRvbiBoYXMgYmVlbiBjbGlja2VkLlxuICAgKiBXaGVuIHRoZSBidXR0b24gaGFzIGJlZW4gY2xpY2tlZCBgaW9uaWNTZWxlY3RhYmxlQWRkSXRlbVRlbXBsYXRlYCB3aWxsIGJlIHNob3duLiBVc2UgdGhlIHRlbXBsYXRlIHRvIGNyZWF0ZSBhIGZvcm0gdG8gZWRpdCBpdGVtLlxuICAgKiAqKk5vdGUqKjogYGNhblNhdmVJdGVtYCBoYXMgdG8gYmUgZW5hYmxlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jb25zYXZlaXRlbSkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvblNhdmVJdGVtOiBFdmVudEVtaXR0ZXI8eyBjb21wb25lbnQ6IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudCwgaXRlbTogYW55IH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIERlbGV0ZSBpdGVtIGJ1dHRvbiBoYXMgYmVlbiBjbGlja2VkLlxuICAgKiAqKk5vdGUqKjogYGNhbkRlbGV0ZUl0ZW1gIGhhcyB0byBiZSBlbmFibGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNvbmRlbGV0ZWl0ZW0pLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgb25EZWxldGVJdGVtOiBFdmVudEVtaXR0ZXI8eyBjb21wb25lbnQ6IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudCwgaXRlbTogYW55IH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIEFkZCBpdGVtIGJ1dHRvbiBoYXMgYmVlbiBjbGlja2VkLlxuICAgKiBXaGVuIHRoZSBidXR0b24gaGFzIGJlZW4gY2xpY2tlZCBgaW9uaWNTZWxlY3RhYmxlQWRkSXRlbVRlbXBsYXRlYCB3aWxsIGJlIHNob3duLiBVc2UgdGhlIHRlbXBsYXRlIHRvIGNyZWF0ZSBhIGZvcm0gdG8gYWRkIGl0ZW0uXG4gICAqICoqTm90ZSoqOiBgY2FuQWRkSXRlbWAgaGFzIHRvIGJlIGVuYWJsZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI29uYWRkaXRlbSkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvbkFkZEl0ZW06IEV2ZW50RW1pdHRlcjx7IGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50IH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBDb250ZW50Q2hpbGQoSW9uaWNTZWxlY3RhYmxlVmFsdWVUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICB2YWx1ZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKElvbmljU2VsZWN0YWJsZUl0ZW1UZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBpdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoSW9uaWNTZWxlY3RhYmxlSXRlbUVuZFRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGl0ZW1FbmRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChJb25pY1NlbGVjdGFibGVUaXRsZVRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIHRpdGxlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoSW9uaWNTZWxlY3RhYmxlUGxhY2Vob2xkZXJUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBwbGFjZWhvbGRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKElvbmljU2VsZWN0YWJsZU1lc3NhZ2VUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBtZXNzYWdlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoSW9uaWNTZWxlY3RhYmxlR3JvdXBUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBncm91cFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKElvbmljU2VsZWN0YWJsZUdyb3VwRW5kVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgZ3JvdXBFbmRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChJb25pY1NlbGVjdGFibGVDbG9zZUJ1dHRvblRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGNsb3NlQnV0dG9uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoSW9uaWNTZWxlY3RhYmxlU2VhcmNoRmFpbFRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIHNlYXJjaEZhaWxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChJb25pY1NlbGVjdGFibGVBZGRJdGVtVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgYWRkSXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKElvbmljU2VsZWN0YWJsZUZvb3RlclRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGZvb3RlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBfYWRkSXRlbVRlbXBsYXRlRm9vdGVySGVpZ2h0OiBzdHJpbmc7XG4gIEBDb250ZW50Q2hpbGQoSW9uaWNTZWxlY3RhYmxlSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgaGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoSW9uaWNTZWxlY3RhYmxlSXRlbUljb25UZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBpdGVtSWNvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKElvbmljU2VsZWN0YWJsZUljb25UZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBpY29uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIFNlZSBJb25pYyBWaXJ0dWFsU2Nyb2xsIFtoZWFkZXJGbl0oaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9hcGkvY29tcG9uZW50cy92aXJ0dWFsLXNjcm9sbC9WaXJ0dWFsU2Nyb2xsLykuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3ZpcnR1YWxzY3JvbGxoZWFkZXJmbikuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHZpcnR1YWxTY3JvbGxIZWFkZXJGbiA9ICgpID0+IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX21vZGFsQ29udHJvbGxlcjogTW9kYWxDb250cm9sbGVyLFxuICAgIHByaXZhdGUgX3BsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGlvbkl0ZW06IElvbkl0ZW0sXG4gICAgcHJpdmF0ZSBfaXRlcmFibGVEaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMsXG4gICAgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIGlmICghdGhpcy5pdGVtcyB8fCAhdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLl9pdGVtc0RpZmZlciA9IHRoaXMuX2l0ZXJhYmxlRGlmZmVycy5maW5kKHRoaXMuaXRlbXMpLmNyZWF0ZSgpO1xuICB9XG5cbiAgaW5pdEZvY3VzKCkgeyB9XG5cbiAgZW5hYmxlSW9uSXRlbShpc0VuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAoIXRoaXMuaW9uSXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaW9uSXRlbS5kaXNhYmxlZCA9ICFpc0VuYWJsZWQ7XG4gIH1cblxuICBfaXNOdWxsT3JXaGl0ZVNwYWNlKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gQ29udmVydCB2YWx1ZSB0byBzdHJpbmcgaW4gY2FzZSBpZiBpdCdzIG5vdC5cbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKC9cXHMvZywgJycpLmxlbmd0aCA8IDE7XG4gIH1cblxuICBfc2V0SGFzU2VhcmNoVGV4dCgpIHtcbiAgICB0aGlzLl9oYXNTZWFyY2hUZXh0ID0gIXRoaXMuX2lzTnVsbE9yV2hpdGVTcGFjZSh0aGlzLl9zZWFyY2hUZXh0KTtcbiAgfVxuXG4gIF9oYXNPblNlYXJjaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc09uU2VhcmNoRW5hYmxlZCAmJiB0aGlzLm9uU2VhcmNoLm9ic2VydmVycy5sZW5ndGggPiAwO1xuICB9XG5cbiAgX2hhc09uU2F2ZUl0ZW0oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2FuU2F2ZUl0ZW0gJiYgdGhpcy5vblNhdmVJdGVtLm9ic2VydmVycy5sZW5ndGggPiAwO1xuICB9XG5cbiAgX2hhc09uQWRkSXRlbSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jYW5BZGRJdGVtICYmIHRoaXMub25BZGRJdGVtLm9ic2VydmVycy5sZW5ndGggPiAwO1xuICB9XG5cbiAgX2hhc09uRGVsZXRlSXRlbSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jYW5EZWxldGVJdGVtICYmIHRoaXMub25EZWxldGVJdGVtLm9ic2VydmVycy5sZW5ndGggPiAwO1xuICB9XG5cbiAgX2VtaXRWYWx1ZUNoYW5nZSgpIHtcbiAgICB0aGlzLnByb3BhZ2F0ZU9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuXG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlXG4gICAgfSk7XG4gIH1cblxuICBfZW1pdFNlYXJjaCgpIHtcbiAgICBpZiAoIXRoaXMuY2FuU2VhcmNoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5vblNlYXJjaC5lbWl0KHtcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIHRleHQ6IHRoaXMuX3NlYXJjaFRleHRcbiAgICB9KTtcbiAgfVxuXG4gIF9lbWl0T25TZWxlY3QoaXRlbTogYW55LCBpc1NlbGVjdGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KHtcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICBpc1NlbGVjdGVkOiBpc1NlbGVjdGVkXG4gICAgfSk7XG4gIH1cblxuICBfZW1pdE9uQ2xlYXIoaXRlbXM6IGFueVtdKSB7XG4gICAgdGhpcy5vbkNsZWFyLmVtaXQoe1xuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgaXRlbXM6IGl0ZW1zXG4gICAgfSk7XG4gIH1cblxuICBfZW1pdE9uU2VhcmNoU3VjY2Vzc09yRmFpbChpc1N1Y2Nlc3M6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBldmVudERhdGEgPSB7XG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICB0ZXh0OiB0aGlzLl9zZWFyY2hUZXh0XG4gICAgfTtcblxuICAgIGlmIChpc1N1Y2Nlc3MpIHtcbiAgICAgIHRoaXMub25TZWFyY2hTdWNjZXNzLmVtaXQoZXZlbnREYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vblNlYXJjaEZhaWwuZW1pdChldmVudERhdGEpO1xuICAgIH1cbiAgfVxuXG4gIF9mb3JtYXRJdGVtKGl0ZW06IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuX2lzTnVsbE9yV2hpdGVTcGFjZShpdGVtKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaXRlbVRleHRGaWVsZCA/IGl0ZW1bdGhpcy5pdGVtVGV4dEZpZWxkXSA6IGl0ZW0udG9TdHJpbmcoKTtcbiAgfVxuXG4gIF9mb3JtYXRWYWx1ZUl0ZW0oaXRlbTogYW55KTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5fc2hvdWxkU3RvcmVJdGVtVmFsdWUpIHtcbiAgICAgIC8vIEdldCBpdGVtIHRleHQgZnJvbSB0aGUgbGlzdCBhcyB3ZSBzdG9yZSBpdCdzIHZhbHVlIG9ubHkuXG4gICAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSB0aGlzLml0ZW1zLmZpbmQoX2l0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gX2l0ZW1bdGhpcy5pdGVtVmFsdWVGaWVsZF0gPT09IGl0ZW07XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1hdEl0ZW0oc2VsZWN0ZWRJdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1hdEl0ZW0oaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgX2dldEl0ZW1WYWx1ZShpdGVtOiBhbnkpOiBhbnkge1xuICAgIGlmICghdGhpcy5faGFzT2JqZWN0cykge1xuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1bdGhpcy5pdGVtVmFsdWVGaWVsZF07XG4gIH1cblxuICBfZ2V0U3RvcmVkSXRlbVZhbHVlKGl0ZW06IGFueSk6IGFueSB7XG4gICAgaWYgKCF0aGlzLl9oYXNPYmplY3RzKSB7XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fc2hvdWxkU3RvcmVJdGVtVmFsdWUgPyBpdGVtIDogaXRlbVt0aGlzLml0ZW1WYWx1ZUZpZWxkXTtcbiAgfVxuXG4gIF9vblNlYXJjaGJhckNsZWFyKCkge1xuICAgIC8vIElvbmljIFNlYXJjaGJhciBkb2Vzbid0IGNsZWFyIGJpbmQgd2l0aCBuZ01vZGVsIHZhbHVlLlxuICAgIC8vIERvIGl0IG91cnNlbHZlcy5cbiAgICB0aGlzLl9zZWFyY2hUZXh0ID0gJyc7XG4gIH1cblxuICBfZmlsdGVySXRlbXMoKSB7XG4gICAgdGhpcy5fc2V0SGFzU2VhcmNoVGV4dCgpO1xuXG4gICAgaWYgKHRoaXMuX2hhc09uU2VhcmNoKCkpIHtcbiAgICAgIC8vIERlbGVnYXRlIGZpbHRlcmluZyB0byB0aGUgZXZlbnQuXG4gICAgICB0aGlzLl9lbWl0U2VhcmNoKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERlZmF1bHQgZmlsdGVyaW5nLlxuICAgICAgbGV0IGdyb3VwcyA9IFtdO1xuXG4gICAgICBpZiAoIXRoaXMuX3NlYXJjaFRleHQgfHwgIXRoaXMuX3NlYXJjaFRleHQudHJpbSgpKSB7XG4gICAgICAgIGdyb3VwcyA9IHRoaXMuX2dyb3VwcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpbHRlclRleHQgPSB0aGlzLl9zZWFyY2hUZXh0LnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIHRoaXMuX2dyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgICAgICBjb25zdCBpdGVtcyA9IGdyb3VwLml0ZW1zLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1UZXh0ID0gKHRoaXMuaXRlbVRleHRGaWVsZCA/XG4gICAgICAgICAgICAgIGl0ZW1bdGhpcy5pdGVtVGV4dEZpZWxkXSA6IGl0ZW0pLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHJldHVybiBpdGVtVGV4dC5pbmRleE9mKGZpbHRlclRleHQpICE9PSAtMTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGdyb3Vwcy5wdXNoKHtcbiAgICAgICAgICAgICAgdmFsdWU6IGdyb3VwLnZhbHVlLFxuICAgICAgICAgICAgICB0ZXh0OiBncm91cC50ZXh0LFxuICAgICAgICAgICAgICBpdGVtczogaXRlbXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gTm8gaXRlbXMgZm91bmQuXG4gICAgICAgIGlmICghZ3JvdXBzLmxlbmd0aCkge1xuICAgICAgICAgIGdyb3Vwcy5wdXNoKHtcbiAgICAgICAgICAgIGl0ZW1zOiBbXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2ZpbHRlcmVkR3JvdXBzID0gZ3JvdXBzO1xuICAgICAgdGhpcy5faGFzRmlsdGVyZWRJdGVtcyA9ICF0aGlzLl9hcmVHcm91cHNFbXB0eShncm91cHMpO1xuICAgICAgdGhpcy5fZW1pdE9uU2VhcmNoU3VjY2Vzc09yRmFpbCh0aGlzLl9oYXNGaWx0ZXJlZEl0ZW1zKTtcbiAgICB9XG4gIH1cblxuICBfaXNJdGVtRGlzYWJsZWQoaXRlbTogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkSXRlbXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZEl0ZW1zLnNvbWUoX2l0ZW0gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2dldEl0ZW1WYWx1ZShfaXRlbSkgPT09IHRoaXMuX2dldEl0ZW1WYWx1ZShpdGVtKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9pc0l0ZW1TZWxlY3RlZChpdGVtOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJdGVtcy5maW5kKHNlbGVjdGVkSXRlbSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fZ2V0SXRlbVZhbHVlKGl0ZW0pID09PSB0aGlzLl9nZXRTdG9yZWRJdGVtVmFsdWUoc2VsZWN0ZWRJdGVtKTtcbiAgICB9KSAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgX2FkZFNlbGVjdGVkSXRlbShpdGVtOiBhbnkpIHtcbiAgICBpZiAodGhpcy5fc2hvdWxkU3RvcmVJdGVtVmFsdWUpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSXRlbXMucHVzaCh0aGlzLl9nZXRJdGVtVmFsdWUoaXRlbSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZEl0ZW1zLnB1c2goaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgX2RlbGV0ZVNlbGVjdGVkSXRlbShpdGVtOiBhbnkpIHtcbiAgICBsZXQgaXRlbVRvRGVsZXRlSW5kZXg7XG5cbiAgICB0aGlzLl9zZWxlY3RlZEl0ZW1zLmZvckVhY2goKHNlbGVjdGVkSXRlbSwgaXRlbUluZGV4KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX2dldEl0ZW1WYWx1ZShpdGVtKSA9PT1cbiAgICAgICAgdGhpcy5fZ2V0U3RvcmVkSXRlbVZhbHVlKHNlbGVjdGVkSXRlbSlcbiAgICAgICkge1xuICAgICAgICBpdGVtVG9EZWxldGVJbmRleCA9IGl0ZW1JbmRleDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuX3NlbGVjdGVkSXRlbXMuc3BsaWNlKGl0ZW1Ub0RlbGV0ZUluZGV4LCAxKTtcbiAgfVxuXG4gIF9jbGljaygpIHtcbiAgICBpZiAoIXRoaXMuaXNFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbGFiZWwgPSB0aGlzLl9nZXRMYWJlbFRleHQoKTtcbiAgICB0aGlzLm9wZW4oKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMub25PcGVuLmVtaXQoe1xuICAgICAgICBjb21wb25lbnQ6IHRoaXNcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgX3NhdmVJdGVtKGV2ZW50OiBFdmVudCwgaXRlbTogYW55KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5faXRlbVRvQWRkID0gaXRlbTtcblxuICAgIGlmICh0aGlzLl9oYXNPblNhdmVJdGVtKCkpIHtcbiAgICAgIHRoaXMub25TYXZlSXRlbS5lbWl0KHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICBpdGVtOiB0aGlzLl9pdGVtVG9BZGRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dBZGRJdGVtVGVtcGxhdGUoKTtcbiAgICB9XG4gIH1cblxuICBfZGVsZXRlSXRlbUNsaWNrKGV2ZW50OiBFdmVudCwgaXRlbTogYW55KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5faXRlbVRvQWRkID0gaXRlbTtcblxuICAgIGlmICh0aGlzLl9oYXNPbkRlbGV0ZUl0ZW0oKSkge1xuICAgICAgLy8gRGVsZWdhdGUgbG9naWMgdG8gZXZlbnQuXG4gICAgICB0aGlzLm9uRGVsZXRlSXRlbS5lbWl0KHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICBpdGVtOiB0aGlzLl9pdGVtVG9BZGRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlbGV0ZUl0ZW0odGhpcy5faXRlbVRvQWRkKTtcbiAgICB9XG4gIH1cblxuICBfYWRkSXRlbUNsaWNrKCkge1xuICAgIGlmICh0aGlzLl9oYXNPbkFkZEl0ZW0oKSkge1xuICAgICAgdGhpcy5vbkFkZEl0ZW0uZW1pdCh7XG4gICAgICAgIGNvbXBvbmVudDogdGhpc1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd0FkZEl0ZW1UZW1wbGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIF9wb3NpdGlvbkFkZEl0ZW1UZW1wbGF0ZSgpIHtcbiAgICAvLyBXYWl0IGZvciB0aGUgdGVtcGxhdGUgdG8gcmVuZGVyLlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgZm9vdGVyID0gdGhpcy5fbW9kYWxDb21wb25lbnQuX2VsZW1lbnQubmF0aXZlRWxlbWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcignLmlvbmljLXNlbGVjdGFibGUtYWRkLWl0ZW0tdGVtcGxhdGUgaW9uLWZvb3RlcicpO1xuXG4gICAgICB0aGlzLl9hZGRJdGVtVGVtcGxhdGVGb290ZXJIZWlnaHQgPSBmb290ZXIgPyBgY2FsYygxMDAlIC0gJHtmb290ZXIub2Zmc2V0SGVpZ2h0fXB4KWAgOiAnMTAwJSc7XG4gICAgfSwgMTAwKTtcbiAgfVxuXG4gIF9jbG9zZSgpIHtcbiAgICB0aGlzLmNsb3NlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLm9uQ2xvc2UuZW1pdCh7XG4gICAgICAgIGNvbXBvbmVudDogdGhpc1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAoIXRoaXMuX2hhc09uU2VhcmNoKCkpIHtcbiAgICAgIHRoaXMuX3NlYXJjaFRleHQgPSAnJztcbiAgICAgIHRoaXMuX3NldEhhc1NlYXJjaFRleHQoKTtcbiAgICB9XG4gIH1cblxuICBfY2xlYXIoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IHRoaXMuX3NlbGVjdGVkSXRlbXM7XG5cbiAgICB0aGlzLmNsZWFyKCk7XG4gICAgdGhpcy5fZW1pdFZhbHVlQ2hhbmdlKCk7XG4gICAgdGhpcy5fZW1pdE9uQ2xlYXIoc2VsZWN0ZWRJdGVtcyk7XG4gICAgdGhpcy5jbG9zZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5vbkNsb3NlLmVtaXQoe1xuICAgICAgICBjb21wb25lbnQ6IHRoaXNcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgX2dldE1vcmVJdGVtcygpIHtcbiAgICB0aGlzLm9uSW5maW5pdGVTY3JvbGwuZW1pdCh7XG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICB0ZXh0OiB0aGlzLl9zZWFyY2hUZXh0XG4gICAgfSk7XG4gIH1cblxuICBfc2V0SXRlbXNUb0NvbmZpcm0oaXRlbXM6IGFueVtdKSB7XG4gICAgLy8gUmV0dXJuIGEgY29weSBvZiBvcmlnaW5hbCBhcnJheSwgc28gaXQgY291bGRuJ3QgYmUgY2hhbmdlZCBmcm9tIG91dHNpZGUuXG4gICAgdGhpcy5faXRlbXNUb0NvbmZpcm0gPSBbXS5jb25jYXQoaXRlbXMpO1xuICB9XG5cbiAgX2RvU2VsZWN0KHNlbGVjdGVkSXRlbTogYW55KSB7XG4gICAgdGhpcy52YWx1ZSA9IHNlbGVjdGVkSXRlbTtcbiAgICB0aGlzLl9lbWl0VmFsdWVDaGFuZ2UoKTtcbiAgfVxuXG4gIF9zZWxlY3QoaXRlbTogYW55KSB7XG4gICAgY29uc3QgaXNJdGVtU2VsZWN0ZWQgPSB0aGlzLl9pc0l0ZW1TZWxlY3RlZChpdGVtKTtcblxuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIGlmIChpc0l0ZW1TZWxlY3RlZCkge1xuICAgICAgICB0aGlzLl9kZWxldGVTZWxlY3RlZEl0ZW0oaXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9hZGRTZWxlY3RlZEl0ZW0oaXRlbSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3NldEl0ZW1zVG9Db25maXJtKHRoaXMuX3NlbGVjdGVkSXRlbXMpO1xuXG4gICAgICAvLyBFbWl0IG9uU2VsZWN0IGV2ZW50IGFmdGVyIHNldHRpbmcgaXRlbXMgdG8gY29uZmlybSBzbyB0aGV5IGNvdWxkIGJlIHVzZWRcbiAgICAgIC8vIGluc2lkZSB0aGUgZXZlbnQuXG4gICAgICB0aGlzLl9lbWl0T25TZWxlY3QoaXRlbSwgIWlzSXRlbVNlbGVjdGVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuaGFzQ29uZmlybUJ1dHRvbiB8fCB0aGlzLmZvb3RlclRlbXBsYXRlKSB7XG4gICAgICAgIC8vIERvbid0IGNsb3NlIE1vZGFsIGFuZCBrZWVwIHRyYWNrIG9uIGl0ZW1zIHRvIGNvbmZpcm0uXG4gICAgICAgIC8vIFdoZW4gZm9vdGVyIHRlbXBsYXRlIGlzIHVzZWQgaXQncyB1cCB0byBkZXZlbG9wZXIgdG8gY2xvc2UgTW9kYWwuXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkSXRlbXMgPSBbXTtcblxuICAgICAgICBpZiAoaXNJdGVtU2VsZWN0ZWQpIHtcbiAgICAgICAgICB0aGlzLl9kZWxldGVTZWxlY3RlZEl0ZW0oaXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fYWRkU2VsZWN0ZWRJdGVtKGl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2V0SXRlbXNUb0NvbmZpcm0odGhpcy5fc2VsZWN0ZWRJdGVtcyk7XG5cbiAgICAgICAgLy8gRW1pdCBvblNlbGVjdCBldmVudCBhZnRlciBzZXR0aW5nIGl0ZW1zIHRvIGNvbmZpcm0gc28gdGhleSBjb3VsZCBiZSB1c2VkXG4gICAgICAgIC8vIGluc2lkZSB0aGUgZXZlbnQuXG4gICAgICAgIHRoaXMuX2VtaXRPblNlbGVjdChpdGVtLCAhaXNJdGVtU2VsZWN0ZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFpc0l0ZW1TZWxlY3RlZCkge1xuICAgICAgICAgIHRoaXMuX3NlbGVjdGVkSXRlbXMgPSBbXTtcbiAgICAgICAgICB0aGlzLl9hZGRTZWxlY3RlZEl0ZW0oaXRlbSk7XG5cbiAgICAgICAgICAvLyBFbWl0IG9uU2VsZWN0IGJlZm9yZSBvbkNoYW5nZS5cbiAgICAgICAgICB0aGlzLl9lbWl0T25TZWxlY3QoaXRlbSwgdHJ1ZSk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fc2hvdWxkU3RvcmVJdGVtVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2RvU2VsZWN0KHRoaXMuX2dldEl0ZW1WYWx1ZShpdGVtKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2RvU2VsZWN0KGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2Nsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2NvbmZpcm0oKSB7XG4gICAgdGhpcy5jb25maXJtKCk7XG4gICAgdGhpcy5fY2xvc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldExhYmVsVGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9pb25MYWJlbEVsZW1lbnQgPyB0aGlzLl9pb25MYWJlbEVsZW1lbnQudGV4dENvbnRlbnQgOiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXJlR3JvdXBzRW1wdHkoZ3JvdXBzKSB7XG4gICAgcmV0dXJuIGdyb3Vwcy5sZW5ndGggPT09IDAgfHwgZ3JvdXBzLmV2ZXJ5KGdyb3VwID0+IHtcbiAgICAgIHJldHVybiAhZ3JvdXAuaXRlbXMgfHwgZ3JvdXAuaXRlbXMubGVuZ3RoID09PSAwO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY291bnRGb290ZXJCdXR0b25zKCkge1xuICAgIGxldCBmb290ZXJCdXR0b25zQ291bnQgPSAwO1xuXG4gICAgaWYgKHRoaXMuY2FuQ2xlYXIpIHtcbiAgICAgIGZvb3RlckJ1dHRvbnNDb3VudCsrO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUgfHwgdGhpcy5faGFzQ29uZmlybUJ1dHRvbikge1xuICAgICAgZm9vdGVyQnV0dG9uc0NvdW50Kys7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2FuQWRkSXRlbSkge1xuICAgICAgZm9vdGVyQnV0dG9uc0NvdW50Kys7XG4gICAgfVxuXG4gICAgdGhpcy5fZm9vdGVyQnV0dG9uc0NvdW50ID0gZm9vdGVyQnV0dG9uc0NvdW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SXRlbXMoaXRlbXM6IGFueVtdKSB7XG4gICAgLy8gSXQncyBpbXBvcnRhbnQgdG8gaGF2ZSBhbiBlbXB0eSBzdGFydGluZyBncm91cCB3aXRoIGVtcHR5IGl0ZW1zIChncm91cHNbMF0uaXRlbXMpLFxuICAgIC8vIGJlY2F1c2Ugd2UgYmluZCB0byBpdCB3aGVuIHVzaW5nIFZpcnR1YWxTY3JvbGwuXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvaXNzdWVzLzcwLlxuICAgIGxldCBncm91cHM6IGFueVtdID0gW3tcbiAgICAgIGl0ZW1zOiBpdGVtcyB8fCBbXVxuICAgIH1dO1xuXG4gICAgaWYgKGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMuX2hhc0dyb3Vwcykge1xuICAgICAgICBncm91cHMgPSBbXTtcblxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGNvbnN0IGdyb3VwVmFsdWUgPSB0aGlzLl9nZXRQcm9wZXJ0eVZhbHVlKGl0ZW0sIHRoaXMuZ3JvdXBWYWx1ZUZpZWxkKSxcbiAgICAgICAgICAgIGdyb3VwID0gZ3JvdXBzLmZpbmQoX2dyb3VwID0+IF9ncm91cC52YWx1ZSA9PT0gZ3JvdXBWYWx1ZSk7XG5cbiAgICAgICAgICBpZiAoZ3JvdXApIHtcbiAgICAgICAgICAgIGdyb3VwLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdyb3Vwcy5wdXNoKHtcbiAgICAgICAgICAgICAgdmFsdWU6IGdyb3VwVmFsdWUsXG4gICAgICAgICAgICAgIHRleHQ6IHRoaXMuX2dldFByb3BlcnR5VmFsdWUoaXRlbSwgdGhpcy5ncm91cFRleHRGaWVsZCksXG4gICAgICAgICAgICAgIGl0ZW1zOiBbaXRlbV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fZ3JvdXBzID0gZ3JvdXBzO1xuICAgIHRoaXMuX2ZpbHRlcmVkR3JvdXBzID0gdGhpcy5fZ3JvdXBzO1xuICAgIHRoaXMuX2hhc0ZpbHRlcmVkSXRlbXMgPSAhdGhpcy5fYXJlR3JvdXBzRW1wdHkodGhpcy5fZmlsdGVyZWRHcm91cHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UHJvcGVydHlWYWx1ZShvYmplY3Q6IGFueSwgcHJvcGVydHk6IHN0cmluZyk6IGFueSB7XG4gICAgaWYgKCFwcm9wZXJ0eSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5LnNwbGl0KCcuJykucmVkdWNlKChfb2JqZWN0LCBfcHJvcGVydHkpID0+IHtcbiAgICAgIHJldHVybiBfb2JqZWN0ID8gX29iamVjdFtfcHJvcGVydHldIDogbnVsbDtcbiAgICB9LCBvYmplY3QpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SW9uSXRlbUhhc0ZvY3VzKGhhc0ZvY3VzOiBib29sZWFuKSB7XG4gICAgaWYgKCF0aGlzLmlvbkl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBBcHBseSBmb2N1cyBDU1MgY2xhc3MgZm9yIHByb3BlciBzdHlseWluZyBvZiBpb24taXRlbS9pb24tbGFiZWwuXG4gICAgdGhpcy5fc2V0SW9uSXRlbUNzc0NsYXNzKCdpdGVtLWhhcy1mb2N1cycsIGhhc0ZvY3VzKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldElvbkl0ZW1IYXNWYWx1ZSgpIHtcbiAgICBpZiAoIXRoaXMuaW9uSXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHZhbHVlIENTUyBjbGFzcyBmb3IgcHJvcGVyIHN0eWx5aW5nIG9mIGlvbi1pdGVtL2lvbi1sYWJlbC5cbiAgICB0aGlzLl9zZXRJb25JdGVtQ3NzQ2xhc3MoJ2l0ZW0taGFzLXZhbHVlJywgdGhpcy5oYXNWYWx1ZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldEhhc1BsYWNlaG9sZGVyKCkge1xuICAgIHRoaXMuX2hhc1BsYWNlaG9sZGVyID0gIXRoaXMuaGFzVmFsdWUoKSAmJlxuICAgICAgKCF0aGlzLl9pc051bGxPcldoaXRlU3BhY2UodGhpcy5wbGFjZWhvbGRlcikgfHwgdGhpcy5wbGFjZWhvbGRlclRlbXBsYXRlKSA/XG4gICAgICB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIHByb3BhZ2F0ZU9uQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xuICBwcml2YXRlIHByb3BhZ2F0ZU9uVG91Y2hlZCA9ICgpID0+IHsgfTtcblxuICBwcml2YXRlIF9zZXRJb25JdGVtQ3NzQ2xhc3MoY3NzQ2xhc3M6IHN0cmluZywgc2hvdWxkQWRkOiBib29sZWFuKSB7XG4gICAgaWYgKCF0aGlzLl9pb25JdGVtRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENoYW5nZSB0byBSZW5kZXJlcjJcbiAgICBpZiAoc2hvdWxkQWRkKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9pb25JdGVtRWxlbWVudCwgY3NzQ2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9pb25JdGVtRWxlbWVudCwgY3NzQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RvZ2dsZUFkZEl0ZW1UZW1wbGF0ZShpc1Zpc2libGU6IGJvb2xlYW4pIHtcbiAgICAvLyBJdCBzaG91bGQgYmUgcG9zc2libGUgdG8gc2hvdy9oaWRlIHRoZSB0ZW1wbGF0ZSByZWdhcmRsZXNzXG4gICAgLy8gY2FuQWRkSXRlbSBvciBjYW5TYXZlSXRlbSBwYXJhbWV0ZXJzLCBzbyB3ZSBjb3VsZCBpbXBsZW1lbnQgc29tZVxuICAgIC8vIGN1c3RvbSBiZWhhdmlvci4gRS5nLiBhZGRpbmcgaXRlbSB3aGVuIHNlYXJjaCBmYWlscyB1c2luZyBvblNlYXJjaEZhaWwgZXZlbnQuXG4gICAgaWYgKCF0aGlzLmFkZEl0ZW1UZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRvIG1ha2UgU2F2ZUl0ZW1UZW1wbGF0ZSB2aXNpYmxlIHdlIGp1c3QgcG9zaXRpb24gaXQgb3ZlciBsaXN0IHVzaW5nIENTUy5cbiAgICAvLyBXZSBkb24ndCBoaWRlIGxpc3Qgd2l0aCAqbmdJZiBvciBbaGlkZGVuXSB0byBwcmV2ZW50IGl0cyBzY3JvbGwgcG9zaXRpb24uXG4gICAgdGhpcy5faXNBZGRJdGVtVGVtcGxhdGVWaXNpYmxlID0gaXNWaXNpYmxlO1xuICAgIHRoaXMuX2lzRm9vdGVyVmlzaWJsZSA9ICFpc1Zpc2libGU7XG4gIH1cblxuICAvKiBDb250cm9sVmFsdWVBY2Nlc3NvciAqL1xuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKG1ldGhvZDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wcm9wYWdhdGVPbkNoYW5nZSA9IG1ldGhvZDtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKG1ldGhvZDogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMucHJvcGFnYXRlT25Ub3VjaGVkID0gbWV0aG9kO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc0VuYWJsZWQgPSAhaXNEaXNhYmxlZDtcbiAgfVxuICAvKiAuQ29udHJvbFZhbHVlQWNjZXNzb3IgKi9cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9pc0lvcyA9IHRoaXMuX3BsYXRmb3JtLmlzKCdpb3MnKTtcbiAgICB0aGlzLl9pc01EID0gIXRoaXMuX2lzSW9zO1xuICAgIHRoaXMuX2hhc09iamVjdHMgPSAhdGhpcy5faXNOdWxsT3JXaGl0ZVNwYWNlKHRoaXMuaXRlbVZhbHVlRmllbGQpO1xuICAgIC8vIEdyb3VwaW5nIGlzIHN1cHBvcnRlZCBmb3Igb2JqZWN0cyBvbmx5LlxuICAgIC8vIElvbmljIFZpcnR1YWxTY3JvbGwgaGFzIGl0J3Mgb3duIGltcGxlbWVudGF0aW9uIG9mIGdyb3VwaW5nLlxuICAgIHRoaXMuX2hhc0dyb3VwcyA9IEJvb2xlYW4odGhpcy5faGFzT2JqZWN0cyAmJiB0aGlzLmdyb3VwVmFsdWVGaWVsZCAmJiAhdGhpcy5oYXNWaXJ0dWFsU2Nyb2xsKTtcblxuICAgIGlmICh0aGlzLmlvbkl0ZW0pIHtcbiAgICAgIHRoaXMuX2lvbkl0ZW1FbGVtZW50ID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsb3Nlc3QoJ2lvbi1pdGVtJyk7XG4gICAgICB0aGlzLl9zZXRJb25JdGVtQ3NzQ2xhc3MoJ2l0ZW0taW50ZXJhY3RpdmUnLCB0cnVlKTtcbiAgICAgIHRoaXMuX3NldElvbkl0ZW1Dc3NDbGFzcygnaXRlbS1pb25pYy1zZWxlY3RhYmxlJywgdHJ1ZSk7XG5cbiAgICAgIGlmICh0aGlzLl9pb25JdGVtRWxlbWVudCkge1xuICAgICAgICB0aGlzLl9pb25MYWJlbEVsZW1lbnQgPSB0aGlzLl9pb25JdGVtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpb24tbGFiZWwnKTtcblxuICAgICAgICBpZiAodGhpcy5faW9uTGFiZWxFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5faGFzSW9uTGFiZWwgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuX2lvbkxhYmVsUG9zaXRpb24gPSB0aGlzLl9pb25MYWJlbEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpIHx8ICdkZWZhdWx0JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZW5hYmxlSW9uSXRlbSh0aGlzLmlzRW5hYmxlZCk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgY29uc3QgaXRlbXNDaGFuZ2VzID0gdGhpcy5faXRlbXNEaWZmZXIuZGlmZih0aGlzLml0ZW1zKTtcblxuICAgIGlmIChpdGVtc0NoYW5nZXMpIHtcbiAgICAgIHRoaXMuX3NldEl0ZW1zKHRoaXMuaXRlbXMpO1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWU7XG5cbiAgICAgIHRoaXMub25JdGVtc0NoYW5nZS5lbWl0KHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBpdGVtLlxuICAgKiAqKk5vdGUqKjogSWYgeW91IHdhbnQgYW4gaXRlbSB0byBiZSBhZGRlZCB0byB0aGUgb3JpZ2luYWwgYXJyYXkgYXMgd2VsbCB1c2UgdHdvLXdheSBkYXRhIGJpbmRpbmcgc3ludGF4IG9uIGBbKGl0ZW1zKV1gIGZpZWxkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNhZGRpdGVtKS5cbiAgICpcbiAgICogQHBhcmFtIGl0ZW0gSXRlbSB0byBhZGQuXG4gICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGl0ZW0gaGFzIGJlZW4gYWRkZWQuXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGFkZEl0ZW0oaXRlbTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIC8vIEFkZGluZyBpdGVtIHRyaWdnZXJzIG9uSXRlbXNDaGFuZ2UuXG4gICAgLy8gUmV0dXJuIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gb25JdGVtc0NoYW5nZSBmaW5pc2hlcy5cbiAgICAvLyBXZSBuZWVkIGEgcHJvbWlzZSBvciB1c2VyIGNvdWxkIGRvIHNvbWV0aGluZyBhZnRlciBpdGVtIGhhcyBiZWVuIGFkZGVkLFxuICAgIC8vIGUuZy4gdXNlIHNlYXJjaCgpIG1ldGhvZCB0byBmaW5kIHRoZSBhZGRlZCBpdGVtLlxuICAgIHRoaXMuaXRlbXMudW5zaGlmdChpdGVtKTtcblxuICAgIC8vIENsb3NlIGFueSBydW5uaW5nIHN1YnNjcmlwdGlvbi5cbiAgICBpZiAodGhpcy5fYWRkSXRlbU9ic2VydmFibGUpIHtcbiAgICAgIHRoaXMuX2FkZEl0ZW1PYnNlcnZhYmxlLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIC8vIENvbXBsZXRlIGNhbGxiYWNrIGlzbid0IGZpcmVkIGZvciBzb21lIHJlYXNvbixcbiAgICAgIC8vIHNvIHVuc3Vic2NyaWJlIGluIGJvdGggc3VjY2VzcyBhbmQgZmFpbCBjYXNlcy5cbiAgICAgIHNlbGYuX2FkZEl0ZW1PYnNlcnZhYmxlID0gc2VsZi5vbkl0ZW1zQ2hhbmdlLmFzT2JzZXJ2YWJsZSgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHNlbGYuX2FkZEl0ZW1PYnNlcnZhYmxlLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgc2VsZi5fYWRkSXRlbU9ic2VydmFibGUudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgcmVqZWN0KCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICogRGVsZXRlcyBpdGVtLlxuICogKipOb3RlKio6IElmIHlvdSB3YW50IGFuIGl0ZW0gdG8gYmUgZGVsZXRlZCBmcm9tIHRoZSBvcmlnaW5hbCBhcnJheSBhcyB3ZWxsIHVzZSB0d28td2F5IGRhdGEgYmluZGluZyBzeW50YXggb24gYFsoaXRlbXMpXWAgZmllbGQuXG4gKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNkZWxldGVpdGVtKS5cbiAqXG4gKiBAcGFyYW0gaXRlbSBJdGVtIHRvIGRlbGV0ZS5cbiAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGl0ZW0gaGFzIGJlZW4gZGVsZXRlZC5cbiAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAqL1xuICBkZWxldGVJdGVtKGl0ZW06IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgbGV0IGhhc1ZhbHVlQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgLy8gUmVtb3ZlIGRlbGV0ZWQgaXRlbSBmcm9tIHNlbGVjdGVkIGl0ZW1zLlxuICAgIGlmICh0aGlzLl9zZWxlY3RlZEl0ZW1zKSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZEl0ZW1zID0gdGhpcy5fc2VsZWN0ZWRJdGVtcy5maWx0ZXIoX2l0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0SXRlbVZhbHVlKGl0ZW0pICE9PSB0aGlzLl9nZXRTdG9yZWRJdGVtVmFsdWUoX2l0ZW0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGRlbGV0ZWQgaXRlbSBmcm9tIHZhbHVlLlxuICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5pc011bHRpcGxlKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWUuZmlsdGVyKHZhbHVlID0+IHtcbiAgICAgICAgICByZXR1cm4gdmFsdWUuaWQgIT09IGl0ZW0uaWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoICE9PSB0aGlzLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZXM7XG4gICAgICAgICAgaGFzVmFsdWVDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGl0ZW0gPT09IHRoaXMudmFsdWUpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgICBoYXNWYWx1ZUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbHVlQ2hhbmdlZCkge1xuICAgICAgdGhpcy5fZW1pdFZhbHVlQ2hhbmdlKCk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGRlbGV0ZWQgaXRlbSBmcm9tIGxpc3QuXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zLmZpbHRlcihfaXRlbSA9PiB7XG4gICAgICByZXR1cm4gX2l0ZW0uaWQgIT09IGl0ZW0uaWQ7XG4gICAgfSk7XG5cbiAgICAvLyBSZWZyZXNoIGl0ZW1zIG9uIHBhcmVudCBjb21wb25lbnQuXG4gICAgdGhpcy5pdGVtc0NoYW5nZS5lbWl0KGl0ZW1zKTtcblxuICAgIC8vIFJlZnJlc2ggbGlzdC5cbiAgICB0aGlzLl9zZXRJdGVtcyhpdGVtcyk7XG5cbiAgICB0aGlzLm9uSXRlbXNDaGFuZ2UuZW1pdCh7XG4gICAgICBjb21wb25lbnQ6IHRoaXNcbiAgICB9KTtcblxuICAgIC8vIENsb3NlIGFueSBydW5uaW5nIHN1YnNjcmlwdGlvbi5cbiAgICBpZiAodGhpcy5fZGVsZXRlSXRlbU9ic2VydmFibGUpIHtcbiAgICAgIHRoaXMuX2RlbGV0ZUl0ZW1PYnNlcnZhYmxlLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIC8vIENvbXBsZXRlIGNhbGxiYWNrIGlzbid0IGZpcmVkIGZvciBzb21lIHJlYXNvbixcbiAgICAgIC8vIHNvIHVuc3Vic2NyaWJlIGluIGJvdGggc3VjY2VzcyBhbmQgZmFpbCBjYXNlcy5cbiAgICAgIHNlbGYuX2RlbGV0ZUl0ZW1PYnNlcnZhYmxlID0gc2VsZi5vbkl0ZW1zQ2hhbmdlLmFzT2JzZXJ2YWJsZSgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHNlbGYuX2RlbGV0ZUl0ZW1PYnNlcnZhYmxlLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgc2VsZi5fZGVsZXRlSXRlbU9ic2VydmFibGUudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgcmVqZWN0KCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgYW55IGl0ZW0gaGFzIGJlZW4gc2VsZWN0ZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2hhc3ZhbHVlKS5cbiAgICpcbiAgICogQHJldHVybnMgQSBib29sZWFuIGRldGVybWluaW5nIHdoZXRoZXIgYW55IGl0ZW0gaGFzIGJlZW4gc2VsZWN0ZWQuXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGhhc1ZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZUl0ZW1zLmxlbmd0aCAhPT0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlSXRlbXMubGVuZ3RoICE9PSAwICYmICF0aGlzLl9pc051bGxPcldoaXRlU3BhY2UodGhpcy5fdmFsdWVJdGVtc1swXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIE1vZGFsLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNvcGVuKS5cbiAgICpcbiAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gTW9kYWwgaGFzIGJlZW4gb3BlbmVkLlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBvcGVuKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGlmICghc2VsZi5faXNFbmFibGVkIHx8IHNlbGYuX2lzT3BlbmVkKSB7XG4gICAgICAgIHJlamVjdCgnSW9uaWNTZWxlY3RhYmxlIGlzIGRpc2FibGVkIG9yIGFscmVhZHkgb3BlbmVkLicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYuX2ZpbHRlckl0ZW1zKCk7XG4gICAgICBzZWxmLl9pc09wZW5lZCA9IHRydWU7XG5cbiAgICAgIGNvbnN0IG1vZGFsT3B0aW9uczogTW9kYWxPcHRpb25zID0ge1xuICAgICAgICBjb21wb25lbnQ6IElvbmljU2VsZWN0YWJsZU1vZGFsQ29tcG9uZW50LFxuICAgICAgICBjb21wb25lbnRQcm9wczogeyBzZWxlY3RDb21wb25lbnQ6IHNlbGYgfSxcbiAgICAgICAgYmFja2Ryb3BEaXNtaXNzOiBzZWxmLl9zaG91bGRCYWNrZHJvcENsb3NlXG4gICAgICB9O1xuXG4gICAgICBpZiAoc2VsZi5tb2RhbENzc0NsYXNzKSB7XG4gICAgICAgIG1vZGFsT3B0aW9ucy5jc3NDbGFzcyA9IHNlbGYubW9kYWxDc3NDbGFzcztcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGYubW9kYWxFbnRlckFuaW1hdGlvbikge1xuICAgICAgICBtb2RhbE9wdGlvbnMuZW50ZXJBbmltYXRpb24gPSBzZWxmLm1vZGFsRW50ZXJBbmltYXRpb247XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxmLm1vZGFsTGVhdmVBbmltYXRpb24pIHtcbiAgICAgICAgbW9kYWxPcHRpb25zLmxlYXZlQW5pbWF0aW9uID0gc2VsZi5tb2RhbExlYXZlQW5pbWF0aW9uO1xuICAgICAgfVxuXG4gICAgICBzZWxmLl9tb2RhbENvbnRyb2xsZXIuY3JlYXRlKG1vZGFsT3B0aW9ucykudGhlbihtb2RhbCA9PiB7XG4gICAgICAgIHNlbGYuX21vZGFsID0gbW9kYWw7XG4gICAgICAgIG1vZGFsLnByZXNlbnQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAvLyBTZXQgZm9jdXMgYWZ0ZXIgTW9kYWwgaGFzIG9wZW5lZCB0byBhdm9pZCBmbGlja2VyaW5nIG9mIGZvY3VzIGhpZ2hsaWdodGluZ1xuICAgICAgICAgIC8vIGJlZm9yZSBNb2RhbCBvcGVuaW5nLlxuICAgICAgICAgIHNlbGYuX3NldElvbkl0ZW1IYXNGb2N1cyh0cnVlKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1vZGFsLm9uV2lsbERpc21pc3MoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBzZWxmLl9zZXRJb25JdGVtSGFzRm9jdXMoZmFsc2UpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtb2RhbC5vbkRpZERpc21pc3MoKS50aGVuKGV2ZW50ID0+IHtcbiAgICAgICAgICBzZWxmLl9pc09wZW5lZCA9IGZhbHNlO1xuICAgICAgICAgIHNlbGYuX2l0ZW1zVG9Db25maXJtID0gW107XG5cbiAgICAgICAgICAvLyBDbG9zZWQgYnkgY2xpY2tpbmcgb24gYmFja2Ryb3Agb3V0c2lkZSBtb2RhbC5cbiAgICAgICAgICBpZiAoZXZlbnQucm9sZSA9PT0gJ2JhY2tkcm9wJykge1xuICAgICAgICAgICAgc2VsZi5vbkNsb3NlLmVtaXQoe1xuICAgICAgICAgICAgICBjb21wb25lbnQ6IHNlbGZcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgTW9kYWwuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2Nsb3NlKS5cbiAgICpcbiAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gTW9kYWwgaGFzIGJlZW4gY2xvc2VkLlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBjbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBpZiAoIXNlbGYuX2lzRW5hYmxlZCB8fCAhc2VsZi5faXNPcGVuZWQpIHtcbiAgICAgICAgcmVqZWN0KCdJb25pY1NlbGVjdGFibGUgaXMgZGlzYWJsZWQgb3IgYWxyZWFkeSBjbG9zZWQuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi5wcm9wYWdhdGVPblRvdWNoZWQoKTtcbiAgICAgIHNlbGYuX2lzT3BlbmVkID0gZmFsc2U7XG4gICAgICBzZWxmLl9pdGVtVG9BZGQgPSBudWxsO1xuICAgICAgc2VsZi5fbW9kYWwuZGlzbWlzcygpLnRoZW4oKCkgPT4ge1xuICAgICAgICBzZWxmLl9zZXRJb25JdGVtSGFzRm9jdXMoZmFsc2UpO1xuICAgICAgICBzZWxmLmhpZGVBZGRJdGVtVGVtcGxhdGUoKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIHZhbHVlLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNjbGVhcikuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGNsZWFyKCkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmlzTXVsdGlwbGUgPyBbXSA6IG51bGw7XG4gICAgdGhpcy5faXRlbXNUb0NvbmZpcm0gPSBbXTtcbiAgICB0aGlzLnByb3BhZ2F0ZU9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpcm1zIHNlbGVjdGVkIGl0ZW1zIGJ5IHVwZGF0aW5nIHZhbHVlLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNjb25maXJtKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgY29uZmlybSgpIHtcbiAgICBpZiAodGhpcy5pc011bHRpcGxlKSB7XG4gICAgICB0aGlzLl9kb1NlbGVjdCh0aGlzLl9zZWxlY3RlZEl0ZW1zKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaGFzQ29uZmlybUJ1dHRvbiB8fCB0aGlzLmZvb3RlclRlbXBsYXRlKSB7XG4gICAgICB0aGlzLl9kb1NlbGVjdCh0aGlzLl9zZWxlY3RlZEl0ZW1zWzBdIHx8IG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIG9yIGRlc2VsZWN0cyBhbGwgb3Igc3BlY2lmaWMgaXRlbXMuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3RvZ2dsZWl0ZW1zKS5cbiAgICpcbiAgICogQHBhcmFtIGlzU2VsZWN0IERldGVybWluZXMgd2hldGhlciB0byBzZWxlY3Qgb3IgZGVzZWxlY3QgaXRlbXMuXG4gICAqIEBwYXJhbSBbaXRlbXNdIEl0ZW1zIHRvIHRvZ2dsZS4gSWYgaXRlbXMgYXJlIG5vdCBzZXQgYWxsIGl0ZW1zIHdpbGwgYmUgdG9nZ2xlZC5cbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgdG9nZ2xlSXRlbXMoaXNTZWxlY3Q6IGJvb2xlYW4sIGl0ZW1zPzogYW55W10pIHtcbiAgICBpZiAoaXNTZWxlY3QpIHtcbiAgICAgIGNvbnN0IGhhc0l0ZW1zID0gaXRlbXMgJiYgaXRlbXMubGVuZ3RoO1xuICAgICAgbGV0IGl0ZW1zVG9Ub2dnbGUgPSB0aGlzLl9ncm91cHMucmVkdWNlKChhbGxJdGVtcywgZ3JvdXApID0+IHtcbiAgICAgICAgcmV0dXJuIGFsbEl0ZW1zLmNvbmNhdChncm91cC5pdGVtcyk7XG4gICAgICB9LCBbXSk7XG5cbiAgICAgIC8vIERvbid0IGFsbG93IHRvIHNlbGVjdCBhbGwgaXRlbXMgaW4gc2luZ2xlIG1vZGUuXG4gICAgICBpZiAoIXRoaXMuaXNNdWx0aXBsZSAmJiAhaGFzSXRlbXMpIHtcbiAgICAgICAgaXRlbXNUb1RvZ2dsZSA9IFtdO1xuICAgICAgfVxuXG4gICAgICAvLyBUb2dnbGUgc3BlY2lmaWMgaXRlbXMuXG4gICAgICBpZiAoaGFzSXRlbXMpIHtcbiAgICAgICAgaXRlbXNUb1RvZ2dsZSA9IGl0ZW1zVG9Ub2dnbGUuZmlsdGVyKGl0ZW1Ub1RvZ2dsZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbmQoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0SXRlbVZhbHVlKGl0ZW1Ub1RvZ2dsZSkgPT09IHRoaXMuX2dldEl0ZW1WYWx1ZShpdGVtKTtcbiAgICAgICAgICB9KSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUYWtlIHRoZSBmaXJzdCBpdGVtIGZvciBzaW5nbGUgbW9kZS5cbiAgICAgICAgaWYgKCF0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgICAgICBpdGVtc1RvVG9nZ2xlLnNwbGljZSgwLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpdGVtc1RvVG9nZ2xlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIHRoaXMuX2FkZFNlbGVjdGVkSXRlbShpdGVtKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZEl0ZW1zID0gW107XG4gICAgfVxuXG4gICAgdGhpcy5fc2V0SXRlbXNUb0NvbmZpcm0odGhpcy5fc2VsZWN0ZWRJdGVtcyk7XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xscyB0byB0aGUgdG9wIG9mIE1vZGFsIGNvbnRlbnQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3Njcm9sbHRvdG9wKS5cbiAgICpcbiAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc2Nyb2xsIGhhcyBiZWVuIGNvbXBsZXRlZC5cbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgc2Nyb2xsVG9Ub3AoKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBpZiAoIXNlbGYuX2lzT3BlbmVkKSB7XG4gICAgICAgIHJlamVjdCgnSW9uaWNTZWxlY3RhYmxlIGNvbnRlbnQgY2Fubm90IGJlIHNjcm9sbGVkLicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYuX21vZGFsQ29tcG9uZW50Ll9jb250ZW50LnNjcm9sbFRvVG9wKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNjcm9sbHMgdG8gdGhlIGJvdHRvbSBvZiBNb2RhbCBjb250ZW50LlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNzY3JvbGx0b2JvdHRvbSkuXG4gICAqXG4gICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNjcm9sbCBoYXMgYmVlbiBjb21wbGV0ZWQuXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIHNjcm9sbFRvQm90dG9tKCk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgaWYgKCFzZWxmLl9pc09wZW5lZCkge1xuICAgICAgICByZWplY3QoJ0lvbmljU2VsZWN0YWJsZSBjb250ZW50IGNhbm5vdCBiZSBzY3JvbGxlZC4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZWxmLl9tb2RhbENvbXBvbmVudC5fY29udGVudC5zY3JvbGxUb0JvdHRvbSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgc2VhcmNoIHByb2Nlc3MgYnkgc2hvd2luZyBMb2FkaW5nIHNwaW5uZXIuXG4gICAqIFVzZSBpdCB0b2dldGhlciB3aXRoIGBvblNlYXJjaGAgZXZlbnQgdG8gaW5kaWNhdGUgc2VhcmNoIHN0YXJ0LlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNzdGFydHNlYXJjaCkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIHN0YXJ0U2VhcmNoKCkge1xuICAgIGlmICghdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TG9hZGluZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuZHMgc2VhcmNoIHByb2Nlc3MgYnkgaGlkaW5nIExvYWRpbmcgc3Bpbm5lciBhbmQgcmVmcmVzaGluZyBpdGVtcy5cbiAgICogVXNlIGl0IHRvZ2V0aGVyIHdpdGggYG9uU2VhcmNoYCBldmVudCB0byBpbmRpY2F0ZSBzZWFyY2ggZW5kLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNlbmRzZWFyY2gpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBlbmRTZWFyY2goKSB7XG4gICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmhpZGVMb2FkaW5nKCk7XG5cbiAgICAvLyBXaGVuIGluc2lkZSBJb25pYyBNb2RhbCBhbmQgb25TZWFyY2ggZXZlbnQgaXMgdXNlZCxcbiAgICAvLyBuZ0RvQ2hlY2soKSBkb2Vzbid0IHdvcmsgYXMgX2l0ZW1zRGlmZmVyIGZhaWxzIHRvIGRldGVjdCBjaGFuZ2VzLlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL2lzc3Vlcy80NC5cbiAgICAvLyBSZWZyZXNoIGl0ZW1zIG1hbnVhbGx5LlxuICAgIHRoaXMuX3NldEl0ZW1zKHRoaXMuaXRlbXMpO1xuICAgIHRoaXMuX2VtaXRPblNlYXJjaFN1Y2Nlc3NPckZhaWwodGhpcy5faGFzRmlsdGVyZWRJdGVtcyk7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyBpbmZpbml0ZSBzY3JvbGwuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2VuYWJsZWluZmluaXRlc2Nyb2xsKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgZW5hYmxlSW5maW5pdGVTY3JvbGwoKSB7XG4gICAgaWYgKCF0aGlzLl9oYXNJbmZpbml0ZVNjcm9sbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX21vZGFsQ29tcG9uZW50Ll9pbmZpbml0ZVNjcm9sbC5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIGluZmluaXRlIHNjcm9sbC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jZGlzYWJsZWluZmluaXRlc2Nyb2xsKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgZGlzYWJsZUluZmluaXRlU2Nyb2xsKCkge1xuICAgIGlmICghdGhpcy5faGFzSW5maW5pdGVTY3JvbGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9tb2RhbENvbXBvbmVudC5faW5maW5pdGVTY3JvbGwuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuZHMgaW5maW5pdGUgc2Nyb2xsLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNlbmRpbmZpbml0ZXNjcm9sbCkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGVuZEluZmluaXRlU2Nyb2xsKCkge1xuICAgIGlmICghdGhpcy5faGFzSW5maW5pdGVTY3JvbGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9tb2RhbENvbXBvbmVudC5faW5maW5pdGVTY3JvbGwuY29tcGxldGUoKTtcbiAgICB0aGlzLl9zZXRJdGVtcyh0aGlzLml0ZW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyBzZWFyY2ggb2YgaXRlbXMuXG4gICAqICoqTm90ZSoqOiBgY2FuU2VhcmNoYCBoYXMgdG8gYmUgZW5hYmxlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jc2VhcmNoKS5cbiAgICpcbiAgICogQHBhcmFtIHRleHQgVGV4dCB0byBzZWFyY2ggaXRlbXMgYnkuXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIHNlYXJjaCh0ZXh0OiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuX2lzRW5hYmxlZCB8fCAhdGhpcy5faXNPcGVuZWQgfHwgIXRoaXMuY2FuU2VhcmNoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fc2VhcmNoVGV4dCA9IHRleHQ7XG4gICAgdGhpcy5fc2V0SGFzU2VhcmNoVGV4dCgpO1xuICAgIHRoaXMuX2ZpbHRlckl0ZW1zKCk7XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgTG9hZGluZyBzcGlubmVyLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNzaG93bG9hZGluZykuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIHNob3dMb2FkaW5nKCkge1xuICAgIGlmICghdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5faXNTZWFyY2hpbmcgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIExvYWRpbmcgc3Bpbm5lci5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaGlkZWxvYWRpbmcpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBoaWRlTG9hZGluZygpIHtcbiAgICBpZiAoIXRoaXMuX2lzRW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2lzU2VhcmNoaW5nID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgYGlvbmljU2VsZWN0YWJsZUFkZEl0ZW1UZW1wbGF0ZWAuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3Nob3dhZGRpdGVtdGVtcGxhdGUpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBzaG93QWRkSXRlbVRlbXBsYXRlKCkge1xuICAgIHRoaXMuX3RvZ2dsZUFkZEl0ZW1UZW1wbGF0ZSh0cnVlKTtcblxuICAgIC8vIFBvc2l0aW9uIHRoZSB0ZW1wbGF0ZSBvbmx5IHdoZW4gaXQgc2hvdXMgdXAuXG4gICAgdGhpcy5fcG9zaXRpb25BZGRJdGVtVGVtcGxhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlcyBgaW9uaWNTZWxlY3RhYmxlQWRkSXRlbVRlbXBsYXRlYC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaGlkZWFkZGl0ZW10ZW1wbGF0ZSkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGhpZGVBZGRJdGVtVGVtcGxhdGUoKSB7XG4gICAgLy8gQ2xlYW4gaXRlbSB0byBhZGQgYXMgaXQncyBubyBsb25nZXIgbmVlZGVkIG9uY2UgQWRkIEl0ZW0gTW9kYWwgaGFzIGJlZW4gY2xvc2VkLlxuICAgIHRoaXMuX2l0ZW1Ub0FkZCA9IG51bGw7XG4gICAgdGhpcy5fdG9nZ2xlQWRkSXRlbVRlbXBsYXRlKGZhbHNlKTtcbiAgfVxufVxuIl19
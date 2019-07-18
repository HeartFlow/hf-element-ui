<template>
  <div>
    <div id="container">
      <el-col :span="12">
        <div class="panel">
          <h3>Dropdown</h3>
          <el-dropdown trigger="click">
            <span>Randy Wong<i class="el-icon-caret-bottom el-icon--right"></i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>My Profile</el-dropdown-item>
              <el-dropdown-item>Connects</el-dropdown-item>
              <el-dropdown-item>Members</el-dropdown-item>
              <el-dropdown-item>Sign Out</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown trigger="click">
            <span>All<i class="el-icon-caret-bottom el-icon--right"></i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><a>My Profile</a></el-dropdown-item>
              <el-dropdown-item><a>Connects</a></el-dropdown-item>
              <el-dropdown-item><a>Members</a></el-dropdown-item>
              <el-dropdown-item><a>Sign Out</a></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-select v-model="selectedState" filterable placeholder="Enter a state">
            <el-option v-for="item in states" :label="item" :value="item" :key="item"></el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="panel">
          <h3>Link &amp; Buttons</h3>
          <a href="#">Link</a>
          <el-button>Default Button</el-button>
          <el-button disabled>Disabled Button</el-button>
          <el-button type="text">Text Button</el-button>
          <el-button type="text" disabled>Text Button</el-button>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="panel text-styles-block">
          <h3>Text styles <a target="_blank" href="https://heartflow.invisionapp.com/share/JZBV91H3K#/screens/235493177_Typography-Web-Roman_Alphabet">typography guidelines</a></h3>
          <h1>Ultra-light H1 90px</h1>
          <h2>Ultra-light H2 55px</h2>
          <h3>Regular H3 34px</h3>
          <h4>Regular H4 24px</h4>
          <h5>Regular H5 16px</h5>
          <span class="headline">Headline ultra-light 38px</span>
          <span class="title">Regular 24px</span>
          <span class="subheading">Sub heading demi-bold 16px</span>
          <span class="caption">Caption regular 12px</span>
          <span>Body 16pt</span>
          <p>{{ longText }}</p>
          <span class="not-provided">Not provided</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="panel">
          <h3>Modal</h3>
          <el-dialog class="secondary" center :visible.sync="secondaryDialogVisible" title="I am the title of a modal" modal-append-to-body>
            <span>There should be some text here relating to an action that triggered this modal. It had better be important.</span>
            <span slot="footer" class="dialog-footer">
              <el-button type="secondary" @click="secondaryDialogVisible = false">Secondary</el-button>
              <el-button type="secondary" disabled>Disabled button secondary</el-button>
              <el-button type="text-secondary" @click="secondaryDialogVisible = false">Text Secondary</el-button>
              <el-button type="text-secondary" disabled>Disabled text secondary</el-button>
            </span>
          </el-dialog>
          Click to open dialogs:
          <el-button type="text" @click="dialogVisible = true">Primary</el-button>
          <el-button type="text" @click="secondaryDialogVisible = true">Secondary</el-button>
          <el-dialog center :visible.sync="dialogVisible" title="I am the title of a modal" modal-append-to-body>
            <span>There should be some text here relating to an action that triggered this modal. It had better be important.</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">Primary</el-button>
              <el-button type="text" @click="dialogVisible = false">Secondary</el-button>
            </span>
          </el-dialog>
          <p style="color:red; font-size:12px">* Primary works in Safari or Chrome with enabled Experimental Web Platform flag (chrome://flags/).</p>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="panel">
          <h3>Tooltip</h3>
          <el-tooltip content="Tooltip information text" :enterable="false" placement="top">
            <el-button>Top</el-button>
          </el-tooltip>
          <el-tooltip content="Tooltip information text" :enterable="false" placement="right">
            <el-button>Right</el-button>
          </el-tooltip>
          <el-tooltip content="Tooltip information text" :enterable="false" placement="bottom">
            <el-button>Bottom</el-button>
          </el-tooltip>
          <el-tooltip content="Tooltip information text" :enterable="false" placement="left">
            <el-button>Left</el-button>
          </el-tooltip>
        </div>
      </el-col>

      <el-col :span="12">
        <div class="panel">
          <h3>Form</h3>
          <el-form :model="formData" label-position="top">
            <el-row>
            <el-col :span="12">
              <el-form-item :label="formData.switchEnabled">
                <el-switch class="processing" v-model="formData.switchEnabled" inactive-value="All Enabled" active-value="My Enabled"></el-switch>
                <el-switch v-model="formData.switchEnabled" inactive-value="My Enabled" active-value="All Enabled"></el-switch>
              </el-form-item>
              <el-form-item :label="formData.switchDisabled">
                <el-switch disabled v-model="formData.switchDisabled" inactive-value="All Disabled" active-value="My Disabled"></el-switch>
                <el-switch disabled v-model="formData.switchDisabled" inactive-value="My Disabled" active-value="All Disabled"></el-switch>
              </el-form-item>
              <el-form-item label="Radio buttons">
                <el-radio-group v-model="formData.transport">
                  <el-radio label="car">Car</el-radio>
                  <el-radio class="processing" label="bicycle">Bicycle</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="Radio disabled">
                <el-radio-group v-model="formData.transport">
                  <el-radio disabled label="car">Car</el-radio>
                  <el-radio disabled label="bicycle">Bicycle</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Radio button">
                <el-radio-group v-model="formData.switchEnabled">
                  <el-radio-button label="My Enabled"></el-radio-button>
                  <el-radio-button label="All Enabled"></el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="Check vegetables">
                <el-checkbox-group v-model="formData.vegetables">
                  <el-checkbox label="tomatoes"></el-checkbox>
                  <el-checkbox label="cucumber"></el-checkbox>
                  <el-checkbox label="potato" disabled></el-checkbox>
                  <el-checkbox label="broccoli" disabled></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-col>
            </el-row>
            <el-form-item label="Input text field" prop="first_name">
              <el-input value="Default value"></el-input>
            </el-form-item>
            <el-form-item label="Disabled field" prop="email">
              <el-input value="Disabled text" suffix-icon="icon-small-locked" disabled></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" placeholder="Password placeholder"></el-input>
            </el-form-item>
            <el-form-item label="Textarea field" prop="message">
              <el-input type="textarea" placeholder="Optional message..." resize="none"
                        :autosize="{ minRows: 4, maxRows: 10 }"></el-input>
            </el-form-item>
            <el-form-item label="Numeric Stepper">
              <el-input-number v-model="formData.numberField" controls-position="right" :min="0"></el-input-number>
            </el-form-item>
            <el-form-item label="Select single option">
              <el-select v-model="formData.singleOption" placeholder="Select">
                <el-option v-for="item in formData.vegetables" :key="item" :label="item" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Select multiple option">
              <el-select v-model="formData.multipleOption" multiple placeholder="Select">
                <el-option v-for="item in formData.vegetables" :key="item" :label="item" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="actions">
              <el-button>Save</el-button>
              <el-button type="text">Cancel</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>

      <el-col :span="12">
        <div class="panel">
          <h3>Popover</h3>
          <el-popover ref="popovertop" placement="top-start" width="200" trigger="click"
                      content="This content has detailed info about button that is activating top popover"></el-popover>

          <el-popover ref="popoverright" placement="right-start" width="200" trigger="hover"
                      content="This content has detailed info about button that is activating right popover"></el-popover>

          <el-popover ref="popoverbottom" placement="bottom" width="200" trigger="hover"
                      content="This content has detailed info about button that is activating bottom popover"></el-popover>

          <el-popover ref="popoverleft" placement="left" title="Title" width="200" trigger="hover"
                      content="This content has detailed info about button that is activating left popover"></el-popover>

          <el-popover ref="popoverwarn" placement="bottom-start" width="200" trigger="hover"
                      content="This is warning information. Popover is placed bottom start."></el-popover>

          <el-button v-popover:popovertop>Top (click)</el-button>
          <el-button v-popover:popoverright>Right</el-button>
          <el-button v-popover:popoverbottom>Bottom</el-button>
          <el-button v-popover:popoverleft>Left</el-button>
          <el-button type="text">Warning <i v-popover:popoverwarn class="el-icon-warning"></i></el-button>
        </div>

        <div class="panel">
          <h3>Notifications</h3>
          <el-button type="text" @click="showMessage">Info message</el-button>
          <el-button @click="notify">Warning notification</el-button>
        </div>

        <div class="panel">
          <h3>Date</h3>
          <el-date-picker v-model="dateValue" type="date" placeholder="Pick a day" :clearable="false"></el-date-picker>
        </div>

        <div class="panel">
          <h3>DateTime</h3>
          <el-date-picker type="datetime" format="yyyy-MM-dd HH:mm" v-model="dateTimeValue"
                          :editable="false" :clearable="false" :picker-options="dateTimeOptions"></el-date-picker>
        </div>
        <div class="panel">
          <h3>DateTimeRange</h3>
          <el-date-picker type="datetimerange" format="yyyy-MM-dd HH:mm" v-model="dateTimeRangeValue"
                          :editable="false" :clearable="false" :picker-options="dateTimeRangeOptions"
                          align="right"></el-date-picker>
        </div>
        <div class="panel">
          <h3>Table actions (<a href="https://heartflow.invisionapp.com/d/main#/console/11082435/236619190/preview">guidelines</a>)</h3>
          <div class="table-actions el-row">
            <div class="actions">
              <el-button>Action 1</el-button>
              <el-button>Action 2</el-button>
            </div>
            <el-input placeholder="Search..." prefix-icon="el-icon-search"></el-input>
          </div>
          <br />
        </div>
        <div class="panel">
          <h3>Breadcrumb</h3>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '' }">Production</el-breadcrumb-item>
          </el-breadcrumb>
          <br />
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>Production</el-breadcrumb-item>
            <el-breadcrumb-item>xxx-xxx-xxx-xxx-xxx-xxx</el-breadcrumb-item>
          </el-breadcrumb>
          <br />
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '' }">Item</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '' }">Sub-Item</el-breadcrumb-item>
            <el-breadcrumb-item>Sub-Sub-Item</el-breadcrumb-item>
            <el-breadcrumb-item>Sub-Sub-Sub-Item</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>

      <el-col :span="24">
        <div class="panel">
          <h3>Data Table</h3>
          <div class="table-actions el-row">
            <div class="actions">
              <action-button icon="icon-standard-refresh" @click="onRefreshButtonClick"
                                ref="refreshButton"></action-button>
              <el-button v-blur>Reset filters</el-button>
            </div>
            <el-input prefix-icon="el-icon-search"></el-input>
          </div>
          <el-table :data="tableData" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="40"></el-table-column>
            <el-table-column property="name" label="PATIENT NAME" min-width="20" show-overflow-tooltip :render-header="renderHeader"></el-table-column>
            <el-table-column property="id" sortable label="PATIENT ID" min-width="15" show-overflow-tooltip></el-table-column>
            <el-table-column property="study" label="CT STUDY" min-width="20" show-overflow-tooltip></el-table-column>
            <el-table-column property="delivery" label="DELIVERY" min-width="20" show-overflow-tooltip></el-table-column>
            <el-table-column property="privilege" label="PRIVILEGE" min-width="20">
              <template slot-scope="scope">
                <el-select v-model="scope.row.privilege">
                  <el-option v-for="item in privileges" :key="item" :label="item" :value="item"></el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column label="QC" property="qc" min-width="10">
              <template slot-scope="scope"><el-checkbox v-model="scope.row.qc"></el-checkbox></template>
            </el-table-column>
            <el-table-column label="STATUS" min-width="20" show-overflow-tooltip :render-header="renderHeader">
              <template slot-scope="scope">
                <el-button class="table-row-hover-show table-cell-button">I am button</el-button>
                <span class="table-row-hover-hide">{{scope.row.status}}</span>
              </template>
            </el-table-column>
            <el-table-column label="FLAGS" min-width="20" show-overflow-tooltip :render-header="renderHeader">
              <template slot-scope="scope">
                <i v-visible="scope.row.qc" class="icon-standard-neutralized_quarantine"></i>
                <i v-visible="scope.row.privilege" class="icon-standard-warning"></i>
                <i v-visible="scope.row.privilege === 'PQE'" class="icon-standard-high_priority"></i>
              </template>
            </el-table-column>
          </el-table>
          <p>Selected users: {{multipleSelection}}</p>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="panel">
          <h3>Expandable Rows Table</h3>
          <el-table :data="tableData" @selection-change="handleSelectionChange">
            <el-table-column type="expand">
              <template>
                Tons of great content!
              </template>
            </el-table-column>
            <el-table-column property="name" label="PATIENT NAME" show-overflow-tooltip></el-table-column>
            <el-table-column label="STATUS" show-overflow-tooltip>
              <template slot-scope="scope">
                <el-button class="table-row-hover-show table-cell-button">I am button</el-button>
                <span class="table-row-hover-hide">{{scope.row.status}}</span>
              </template>
            </el-table-column>
            <el-table-column width="75">
              <template>
                <i class="icon-small-delete table-row-hover-show table-row-expanded-show"
                   @click="secondaryDialogVisible = !secondaryDialogVisible"></i>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="panel">
          <h3>Transfer</h3>
          <el-transfer class="hf-transfer" v-model="selectedCertifications" :titles="['UNCERTIFIED', 'CERTIFIED']"
                       :render-content="renderTransferContent" :data="certifications">
          </el-transfer>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="panel">
          <h3>Collapsible (with content)</h3>
          <collapsible>
            <span style="font-size: 20px; margin-bottom: 10px; display: inline-block" slot="header">User Interface</span>
            <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
            <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
          </collapsible>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="panel">
          <h3 style="display: inline-block;">Vertical List</h3>
          <el-button style="float: right" @click="verticalListLoading = !verticalListLoading">
            Toggle Loading
          </el-button>
          <el-row>
            <el-col :span="12">
              <vertical-list style="height: 150px; display: inline-block" :loading="verticalListLoading">
                <h5 slot="title">Food Groups</h5>
                <li slot="items" v-for="(foodGroup, i) in foodGroups" :key="i">{{foodGroup}}</li>
              </vertical-list>
            </el-col>
            <el-col :span="12">
              <vertical-list style="height: 150px; display: inline-block" :loading="verticalListLoading">
                <h5 slot="title">Privileges</h5>
                <li slot="items" v-for="(privilege, i) in privileges" :key="i">
                  <a :href="`#/${privilege}`">{{privilege}}</a>
                </li>
              </vertical-list>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="panel">
          <h3>Iconography</h3>
          <h4>Elements icons. <span class="subheading">Assign the class name to el-icon-iconName</span></h4>
          <div class="icons">
            <div v-for="(icon, i) in iconsElementUI" :key="i">
              <i :class="getIconClass(icon)"></i><div class="ellipsis" :title="icon">{{ icon }}</div>
            </div>
          </div>
          <h4>Custom small icons. <span class="subheading">Assign the class name to icon-small-iconName</span></h4>
          <div class="icons">
            <div v-for="(icon, i) in iconsSmallCustom" :key="i">
              <i :class="getIconClass(icon, 'small')"></i><div class="ellipsis" :title="icon">{{ icon }}</div>
            </div>
          </div>
           <h4>Custom standard icons. <span class="subheading">Assign the class name to icon-standard-iconName</span></h4>
          <div class="icons">
            <div v-for="(icon, i) in iconsStandardCustom" :key="i">
              <i :class="getIconClass(icon, 'standard')"></i><div class="ellipsis" :title="icon">{{ icon }}</div>
            </div>
          </div>
          <h4>HF Small icons. <span class="subheading">Assign the class name to icon-small-iconName</span></h4>
          <div class="icons small-icons">
            <div v-for="(icon, i) in iconsHFSmall" :key="i">
              <i :class="getIconClass(icon, 'small')"></i><div class="ellipsis" :title="icon">{{ icon }}</div>
            </div>
          </div>
          <h4>HF Standard icons. <span class="subheading">Assign the class name to icon-standard-iconName</span></h4>
          <div class="icons standard-icons">
            <div v-for="(icon, i) in iconsHFStandard" :key="i">
              <i :class="getIconClass(icon, 'standard')"></i><div class="ellipsis" :title="icon">{{ icon }}</div>
            </div>
          </div>
          <h4>HF Large icons. <span class="subheading">Assign the class name to icon-large-iconName</span></h4>
          <div class="icons large-icons">
            <div v-for="(icon, i) in iconsHFLarge" :key="i">
              <i :class="getIconClass(icon, 'large')"></i><div class="ellipsis" :title="icon">{{ icon }}</div>
            </div>
          </div>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script src="@/pages/main.js"></script>

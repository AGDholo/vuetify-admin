<template>
  <div>
    <example description="Smart and editable user forms" title="DataTable(WIP)">
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        :loading="dataTableLoading"
        class="elevation-1"
      >
        <template v-slot:body="{ items, headers }">
          <tbody>
          <tr v-for="(item,idx) in items" :key="idx">
            <td v-for="(header,key) in headers" :key="key">
              <v-edit-dialog
                :return-value.sync="item[header.value]"
                large
                persistent
                @save="onSave()"
              > {{ item[header.value] }}
                <template v-slot:input>
                  <v-text-field
                    v-model="item[header.value]"
                    dense
                    hide-details
                    label="Edit"
                    outlined
                    single-line
                  ></v-text-field>
                </template>
              </v-edit-dialog>
            </td>
          </tr>
          </tbody>
        </template>

      </v-data-table>
    </example>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DataTableData from "@/views/Components/DataTable/DataTableData";
import Example from "@/components/document/example.vue";

@Component({
  components: { Example }
})
export default class Datatable extends Vue {
  private headers = DataTableData.headers;

  private desserts = DataTableData.desserts;

  private dataTableLoading = false;

  private onSave() {
    this.dataTableLoading = true;
    setTimeout(() => this.dataTableLoading = false, 1000);
  }
}
</script>

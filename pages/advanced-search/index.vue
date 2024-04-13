<template>
  <div class="mt-5">
    <div class="flex items-start py-4">
      <span class="text-secondary"><IconHomeSmile /></span>
      <a href="/index" class="text-secondary">Home /</a>
      <a href="/advanced-search" class="text-secondary"> Advanced Search </a>
    </div>
    <div class="py-4">
      <span class="text-primary text-xl font-semibold"> Search Results: </span>
    </div>
    <div class="card flex flex-wrap gap-2 py-8">
      <span class="flex items-start text-sm text-black">Filters</span>
      <Chip class="bg-secondary text-white" label="Triple" removable />
      <Chip class="bg-secondary text-white" label="Mojarad" removable />
      <Chip class="bg-secondary text-white" label="Noune" removable />
      <Chip class="bg-secondary text-white" label="Lazim" removable />
    </div>
    <div class="flex items-start w-full gap-2">
      <div class="bg-neutral-400/10 w-72">
        <div class="bg-secondary/35 p-5 rounded-xl rounded-b-none text-xl">
          <p class="font-medium text-center flex items-center"><IconFilterTick />Filters</p>
        </div>
        <div class="p-3 flex flex-col gap-4 h-[1078px] overflow-x-hidden overflow-y-scroll custom-scrollbar">
          <PrimePanel
            header="Triple"
            toggleable
            :pt="{
              header: 'bg-secondary/35 rounded-xl text-sm font-medium text-neutral-700',
              content: 'bg-transparent px-0 py-2',
            }"
          >
            <template #togglericon="{ collapsed }">
              <IconSmallArrow :class="{ ['rotate-180']: collapsed }" filled />
            </template>

            <PrimePanel
              :pt="{
                header: 'bg-transparent py-0',
                content: 'bg-transparent px-10 py-0',
              }"
              toggleable
              collapsed
            >
              <template #togglericon="{ collapsed }">
                <IconSmallArrow :class="{ ['rotate-180']: collapsed }" filled />
              </template>
              <template #header>
                <BaseCheckbox
                  id="checkbox-parent-1"
                  v-model="checkboxValue"
                  name="checkbox-parent-1"
                  class="my-3"
                  :label-text="'Healthy'"
                  :value="true"
                  rounded
                />
              </template>

              <PrimePanel
                :pt="{
                  header: 'bg-transparent p-0',
                  content: 'bg-transparent px-2 py-0',
                }"
              >
                <template #header>
                  <BaseCheckbox
                    id="checkbox-parent-2"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Salim'"
                    :value="true"
                    rounded
                  />
                </template>
              </PrimePanel>
              <PrimePanel
                :pt="{
                  header: 'bg-transparent p-0',
                  content: 'bg-transparent px-2 py-0',
                }"
                toggleable
                collapsed
              >
                <template #togglericon="{ collapsed }">
                  <IconSmallArrow :class="{ ['rotate-180']: collapsed }" filled />
                </template>
                <template #header>
                  <BaseCheckbox
                    id="checkbox-parent-3"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Mahmouz'"
                    :value="true"
                    rounded
                  />
                </template>

                <BaseCheckbox
                  id="checkbox-parent-4"
                  v-model="checkboxValue"
                  name="checkbox-parent-1"
                  class="my-3"
                  :label-text="'Mahmouz Faa'"
                  :value="true"
                  rounded
                />
                <BaseCheckbox
                  id="checkbox-parent-5"
                  v-model="checkboxValue"
                  name="checkbox-parent-1"
                  class="my-3"
                  :label-text="'Mahmouz Ain'"
                  :value="true"
                  rounded
                />
                <BaseCheckbox
                  id="checkbox-parent-6"
                  v-model="checkboxValue"
                  name="checkbox-parent-1"
                  class="my-3"
                  :label-text="'Mahmouz Laam'"
                  :value="true"
                  rounded
                />
                <BaseCheckbox
                  id="checkbox-parent-7"
                  v-model="checkboxValue"
                  name="checkbox-parent-1"
                  class="my-3"
                  :label-text="'Mahmouz Faa Mudaaf'"
                  :value="true"
                  rounded
                />
                <BaseCheckbox
                  id="checkbox-parent-8"
                  v-model="checkboxValue"
                  name="checkbox-parent-1"
                  class="my-3"
                  :label-text="'Mahmouz Faa Mahmouz Laam'"
                  :value="true"
                  rounded
                />
              </PrimePanel>
              <PrimePanel
                :pt="{
                  header: 'bg-transparent p-0',
                  content: 'bg-transparent px-2 py-0',
                }"
              >
                <template #header>
                  <BaseCheckbox
                    id="checkbox-parent-9"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Mudaaf'"
                    :value="true"
                    rounded
                  />
                </template>
              </PrimePanel>
            </PrimePanel>
            <PrimePanel
              :pt="{
                header: 'bg-transparent py-0',
                content: 'bg-transparent px-10 py-0',
              }"
              toggleable
              collapsed
            >
              <template #togglericon="{ collapsed }">
                <IconSmallArrow :class="{ ['rotate-180']: collapsed }" filled />
              </template>
              <template #header>
                <BaseCheckbox
                  id="checkbox-parent-10"
                  v-model="checkboxValue"
                  name="checkbox-parent-1"
                  class="my-3"
                  :label-text="'Unhealthy'"
                  :value="true"
                  rounded
                />
              </template>
              <PrimePanel
                :pt="{
                  header: 'bg-transparent p-0',
                  content: 'bg-transparent px-2 py-0',
                }"
                toggleable
                collapsed
              >
                <template #togglericon="{ collapsed }">
                  <IconSmallArrow :class="{ ['rotate-180']: collapsed }" filled />
                </template>
                <template #header>
                  <BaseCheckbox
                    id="checkbox-parent-11"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'One Latter'"
                    :value="true"
                    rounded
                  />
                </template>

                <PrimePanel
                  :pt="{
                    header: 'bg-transparent p-0',
                    content: 'bg-transparent px-2 py-0',
                  }"
                  toggleable
                  collapsed
                >
                  <template #togglericon="{ collapsed }">
                    <IconSmallArrow :class="{ ['rotate-180']: collapsed }" filled />
                  </template>
                  <template #header>
                    <BaseCheckbox
                      id="checkbox-parent-12"
                      v-model="checkboxValue"
                      name="checkbox-parent-1"
                      class="my-3"
                      :label-text="'Mithal'"
                      :value="true"
                      rounded
                    />
                  </template>

                  <BaseCheckbox
                    id="checkbox-parent-13"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Mithal Wawi'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-14"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Mithal Wawi Mudaaf'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-15"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Mithal Wawi Mahmouz Ain'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-16"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Mithal Wawi Mahmouz Laam'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-17"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Mithal Yaee'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-18"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Mithal Yaee Mahmouz Ain'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-19"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Mithal Yaee Mudaaf'"
                    :value="true"
                    rounded
                  />
                </PrimePanel>

                <PrimePanel
                  :pt="{
                    header: 'bg-transparent p-0',
                    content: 'bg-transparent px-2 py-0',
                  }"
                  toggleable
                  collapsed
                >
                  <template #togglericon="{ collapsed }">
                    <IconSmallArrow :class="{ ['rotate-180']: collapsed }" filled />
                  </template>
                  <template #header>
                    <BaseCheckbox
                      id="checkbox-parent-20"
                      v-model="checkboxValue"
                      name="checkbox-parent-1"
                      class="my-3"
                      :label-text="'Ajwaf'"
                      :value="true"
                      rounded
                    />
                  </template>

                  <BaseCheckbox
                    id="checkbox-parent-21"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Ajwaf Wawi Mahmouz Faa'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-22"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Ajwaf Wawi Mahmouz Laam'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-23"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Ajwaf Wawi'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-24"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Ajwaf Yaee'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-25"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Ajwaf Yaee Mahmouz Faa'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-26"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Ajwaf Yaee Mahmouz Laam'"
                    :value="true"
                    rounded
                  />
                </PrimePanel>

                <PrimePanel
                  :pt="{
                    header: 'bg-transparent p-0',
                    content: 'bg-transparent px-2 py-0',
                  }"
                  toggleable
                  collapsed
                >
                  <template #togglericon="{ collapsed }">
                    <IconSmallArrow :class="{ ['rotate-180']: collapsed }" filled />
                  </template>
                  <template #header>
                    <BaseCheckbox
                      id="checkbox-parent-27"
                      v-model="checkboxValue"
                      name="checkbox-parent-1"
                      class="my-3"
                      :label-text="'Naqis'"
                      :value="true"
                      rounded
                    />
                  </template>

                  <BaseCheckbox
                    id="checkbox-parent-28"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Naqis Wawi'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-29"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Naqis Wawi Mahmouz Faa'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-30"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Naqis Wawi Mahmouz Ain'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-31"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Naqis Yaee'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-32"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Naqis Yaee Mahmouz Faa'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-33"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Naqis Yaee Mahmouz Ain'"
                    :value="true"
                    rounded
                  />
                </PrimePanel>
              </PrimePanel>

              <PrimePanel
                :pt="{
                  header: 'bg-transparent p-0',
                  content: 'bg-transparent px-2 py-0',
                }"
                toggleable
                collapsed
              >
                <template #togglericon="{ collapsed }">
                  <IconSmallArrow :class="{ ['rotate-180']: collapsed }" filled />
                </template>
                <template #header>
                  <BaseCheckbox
                    id="checkbox-parent-34"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Two Latters'"
                    :value="true"
                    rounded
                  />
                </template>

                <PrimePanel
                  :pt="{
                    header: 'bg-transparent p-0',
                    content: 'bg-transparent px-2 py-0',
                  }"
                  toggleable
                  collapsed
                >
                  <template #togglericon="{ collapsed }">
                    <IconSmallArrow :class="{ ['rotate-180']: collapsed }" filled />
                  </template>
                  <template #header>
                    <BaseCheckbox
                      id="checkbox-parent-35"
                      v-model="checkboxValue"
                      name="checkbox-parent-1"
                      class="my-3"
                      :label-text="'Maqroon'"
                      :value="true"
                      rounded
                    />
                  </template>

                  <BaseCheckbox
                    id="checkbox-parent-36"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Lafeef Maqroon'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-37"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Lafeef Maqroon Mahmouz Faa'"
                    :value="true"
                    rounded
                  />
                </PrimePanel>
                <PrimePanel
                  :pt="{
                    header: 'bg-transparent p-0',
                    content: 'bg-transparent px-2 py-0',
                  }"
                  toggleable
                  collapsed
                >
                  <template #togglericon="{ collapsed }">
                    <IconSmallArrow :class="{ ['rotate-180']: collapsed }" filled />
                  </template>
                  <template #header>
                    <BaseCheckbox
                      id="checkbox-parent-38"
                      v-model="checkboxValue"
                      name="checkbox-parent-1"
                      class="my-3"
                      :label-text="'Mafrooq'"
                      :value="true"
                      rounded
                    />
                  </template>

                  <BaseCheckbox
                    id="checkbox-parent-39"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Lafeef Mafrooq'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-40"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Lafeef Mafrooq Mahmouz Ain'"
                    :value="true"
                    rounded
                  />
                </PrimePanel>
              </PrimePanel>
            </PrimePanel>
          </PrimePanel>

          <PrimePanel
            header="Quade"
            toggleable
            :pt="{
              header: 'bg-secondary/35 rounded-xl text-sm font-medium text-neutral-700',
              content: 'bg-transparent px-0 py-2',
            }"
          >
            <template #togglericon="{ collapsed }">
              <IconSmallArrow :class="{ ['rotate-180']: collapsed }" filled />
            </template>

            <PrimePanel
              :pt="{
                header: 'bg-transparent py-0',
                content: 'bg-transparent px-10 py-0',
              }"
              toggleable
              collapsed
            >
              <template #togglericon="{ collapsed }">
                <IconSmallArrow :class="{ ['rotate-180']: collapsed }" filled />
              </template>
              <template #header>
                <BaseCheckbox
                  id="checkbox-parent-41"
                  v-model="checkboxValue"
                  name="checkbox-parent-1"
                  class="my-3"
                  :label-text="'Healthy'"
                  :value="true"
                  rounded
                />
              </template>

              <PrimePanel
                :pt="{
                  header: 'bg-transparent p-0',
                  content: 'bg-transparent px-2 py-0',
                }"
              >
                <template #header>
                  <BaseCheckbox
                    id="checkbox-parent-42"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Salim'"
                    :value="true"
                    rounded
                  />
                </template>
              </PrimePanel>
              <PrimePanel
                :pt="{
                  header: 'bg-transparent p-0',
                  content: 'bg-transparent px-2 py-0',
                }"
                toggleable
                collapsed
              >
                <template #togglericon="{ collapsed }">
                  <IconSmallArrow :class="{ ['rotate-180']: collapsed }" filled />
                </template>
                <template #header>
                  <BaseCheckbox
                    id="checkbox-parent-43"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Mahmouz'"
                    :value="true"
                    rounded
                  />
                </template>

                <BaseCheckbox
                  id="checkbox-parent-44"
                  v-model="checkboxValue"
                  name="checkbox-parent-1"
                  class="my-3"
                  :label-text="'Mahmouz Faa'"
                  :value="true"
                  rounded
                />
                <BaseCheckbox
                  id="checkbox-parent-45"
                  v-model="checkboxValue"
                  name="checkbox-parent-1"
                  class="my-3"
                  :label-text="'Mahmouz Ain'"
                  :value="true"
                  rounded
                />
                <BaseCheckbox
                  id="checkbox-parent-46"
                  v-model="checkboxValue"
                  name="checkbox-parent-1"
                  class="my-3"
                  :label-text="'Mahmouz Laam'"
                  :value="true"
                  rounded
                />
                <BaseCheckbox
                  id="checkbox-parent-47"
                  v-model="checkboxValue"
                  name="checkbox-parent-1"
                  class="my-3"
                  :label-text="'Mahmouz Faa Mudaaf'"
                  :value="true"
                  rounded
                />
                <BaseCheckbox
                  id="checkbox-parent-48"
                  v-model="checkboxValue"
                  name="checkbox-parent-1"
                  class="my-3"
                  :label-text="'Mahmouz Faa Mahmouz Laam'"
                  :value="true"
                  rounded
                />
              </PrimePanel>
              <PrimePanel
                :pt="{
                  header: 'bg-transparent p-0',
                  content: 'bg-transparent px-2 py-0',
                }"
              >
                <template #header>
                  <BaseCheckbox
                    id="checkbox-parent-49"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Mudaaf'"
                    :value="true"
                    rounded
                  />
                </template>
              </PrimePanel>
            </PrimePanel>

            <PrimePanel
              :pt="{
                header: 'bg-transparent py-0',
                content: 'bg-transparent px-10 py-0',
              }"
              toggleable
              collapsed
            >
              <template #togglericon="{ collapsed }">
                <IconSmallArrow :class="{ ['rotate-180']: collapsed }" filled />
              </template>
              <template #header>
                <BaseCheckbox
                  id="checkbox-parent-50"
                  v-model="checkboxValue"
                  name="checkbox-parent-1"
                  class="my-3"
                  :label-text="'Unhealthy'"
                  :value="true"
                  rounded
                />
              </template>
              <PrimePanel
                :pt="{
                  header: 'bg-transparent p-0',
                  content: 'bg-transparent px-2 py-0',
                }"
                toggleable
                collapsed
              >
                <template #togglericon="{ collapsed }">
                  <IconSmallArrow :class="{ ['rotate-180']: collapsed }" filled />
                </template>
                <template #header>
                  <BaseCheckbox
                    id="checkbox-parent-51"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'One Latter'"
                    :value="true"
                    rounded
                  />
                </template>

                <PrimePanel
                  :pt="{
                    header: 'bg-transparent p-0',
                    content: 'bg-transparent px-2 py-0',
                  }"
                  toggleable
                  collapsed
                >
                  <template #togglericon="{ collapsed }">
                    <IconSmallArrow :class="{ ['rotate-180']: collapsed }" filled />
                  </template>
                  <template #header>
                    <BaseCheckbox
                      id="checkbox-parent-52"
                      v-model="checkboxValue"
                      name="checkbox-parent-1"
                      class="my-3"
                      :label-text="'Mithal'"
                      :value="true"
                      rounded
                    />
                  </template>

                  <BaseCheckbox
                    id="checkbox-parent-53"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Mithal Wawi'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-54"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Mithal Wawi Mudaaf'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-55"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Mithal Wawi Mahmouz Ain'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-56"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Mithal Wawi Mahmouz Laam'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-57"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Mithal Yaee'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-58"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Mithal Yaee Mahmouz Ain'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-59"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Mithal Yaee Mudaaf'"
                    :value="true"
                    rounded
                  />
                </PrimePanel>

                <PrimePanel
                  :pt="{
                    header: 'bg-transparent p-0',
                    content: 'bg-transparent px-2 py-0',
                  }"
                  toggleable
                  collapsed
                >
                  <template #togglericon="{ collapsed }">
                    <IconSmallArrow :class="{ ['rotate-180']: collapsed }" filled />
                  </template>
                  <template #header>
                    <BaseCheckbox
                      id="checkbox-parent-60"
                      v-model="checkboxValue"
                      name="checkbox-parent-1"
                      class="my-3"
                      :label-text="'Ajwaf'"
                      :value="true"
                      rounded
                    />
                  </template>

                  <BaseCheckbox
                    id="checkbox-parent-61"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Ajwaf Wawi Mahmouz Faa'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-62"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Ajwaf Wawi Mahmouz Laam'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-63"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Ajwaf Wawi'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-64"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Ajwaf Yaee'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-65"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Ajwaf Yaee Mahmouz Faa'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-66"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Ajwaf Yaee Mahmouz Laam'"
                    :value="true"
                    rounded
                  />
                </PrimePanel>

                <PrimePanel
                  :pt="{
                    header: 'bg-transparent p-0',
                    content: 'bg-transparent px-2 py-0',
                  }"
                  toggleable
                  collapsed
                >
                  <template #togglericon="{ collapsed }">
                    <IconSmallArrow :class="{ ['rotate-180']: collapsed }" filled />
                  </template>
                  <template #header>
                    <BaseCheckbox
                      id="checkbox-parent-67"
                      v-model="checkboxValue"
                      name="checkbox-parent-1"
                      class="my-3"
                      :label-text="'Naqis'"
                      :value="true"
                      rounded
                    />
                  </template>

                  <BaseCheckbox
                    id="checkbox-parent-68"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Naqis Wawi'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-69"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Naqis Wawi Mahmouz Faa'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-70"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Naqis Wawi Mahmouz Ain'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-71"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Naqis Yaee'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-72"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Naqis Yaee Mahmouz Faa'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-73"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Naqis Yaee Mahmouz Ain'"
                    :value="true"
                    rounded
                  />
                </PrimePanel>
              </PrimePanel>

              <PrimePanel
                :pt="{
                  header: 'bg-transparent p-0',
                  content: 'bg-transparent px-2 py-0',
                }"
                toggleable
                collapsed
              >
                <template #togglericon="{ collapsed }">
                  <IconSmallArrow :class="{ ['rotate-180']: collapsed }" filled />
                </template>
                <template #header>
                  <BaseCheckbox
                    id="checkbox-parent-74"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Two Latters'"
                    :value="true"
                    rounded
                  />
                </template>

                <PrimePanel
                  :pt="{
                    header: 'bg-transparent p-0',
                    content: 'bg-transparent px-2 py-0',
                  }"
                  toggleable
                  collapsed
                >
                  <template #togglericon="{ collapsed }">
                    <IconSmallArrow :class="{ ['rotate-180']: collapsed }" filled />
                  </template>
                  <template #header>
                    <BaseCheckbox
                      id="checkbox-parent-75"
                      v-model="checkboxValue"
                      name="checkbox-parent-1"
                      class="my-3"
                      :label-text="'Maqroon'"
                      :value="true"
                      rounded
                    />
                  </template>

                  <BaseCheckbox
                    id="checkbox-parent-76"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Lafeef Maqroon'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-77"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Lafeef Maqroon Mahmouz Faa'"
                    :value="true"
                    rounded
                  />
                </PrimePanel>
                <PrimePanel
                  :pt="{
                    header: 'bg-transparent p-0',
                    content: 'bg-transparent px-2 py-0',
                  }"
                  toggleable
                  collapsed
                >
                  <template #togglericon="{ collapsed }">
                    <IconSmallArrow :class="{ ['rotate-180']: collapsed }" filled />
                  </template>
                  <template #header>
                    <BaseCheckbox
                      id="checkbox-parent-78"
                      v-model="checkboxValue"
                      name="checkbox-parent-1"
                      class="my-3"
                      :label-text="'Mafrooq'"
                      :value="true"
                      rounded
                    />
                  </template>

                  <BaseCheckbox
                    id="checkbox-parent-79"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Lafeef Mafrooq'"
                    :value="true"
                    rounded
                  />
                  <BaseCheckbox
                    id="checkbox-parent-80"
                    v-model="checkboxValue"
                    name="checkbox-parent-1"
                    class="my-3"
                    :label-text="'Lafeef Mafrooq Mahmouz Ain'"
                    :value="true"
                    rounded
                  />
                </PrimePanel>
              </PrimePanel>
            </PrimePanel>
          </PrimePanel>
        </div>
        <div class="bg-secondary/35 rounded-b-none text-center text-sm">
          <div class="flex flex-row items-start text-white">
            <button class="bg-secondary p-4 h-[60px] w-[150px] rounded-b-xl">RESET</button>
            <button class="bg-primary p-5 h-[60px] w-[150px] rounded-b-xl">APPLY</button>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="mb-3">
          <div class="table-row">
            <p>Verb Root</p>
            <p>Root Type</p>
            <p>Translation</p>
            <p>Verb Display String</p>
            <p>Translation</p>
          </div>
          <div
            v-for="x in 15"
            :key="x"
            class="table-row table-row--data"
            :class="{ ['table-row--data--colored']: x % 2 == 0 }"
          >
            <p>كتب</p>
            <p class="!px-4">triple Root - فعل ثلاثي</p>
            <p>
              <span> Wrote </span>
              <span> <IconVolumeLow class="text-xl text-secondary" /> </span>
            </p>
            <p>
              <span> كتب </span>
              <span> <IconVolumeLow class="text-xl text-secondary" /> </span>
            </p>
            <p>
              <span> Wrote </span>
              <span> <IconVolumeLow class="text-xl text-secondary" /> </span>
            </p>
          </div>
        </div>
        <BasePagination :rows="10" :total-records="120" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Chip from 'primevue/chip';
import IconSmallArrow from '@/assets/icons/smallArrow.svg';
import IconVolumeLow from '@/assets/icons/volume-low.svg';
import IconFilterTick from '@/assets/icons/filter-tick.svg';
import IconHomeSmile from '@/assets/icons/Home-smile.svg';

const checkboxValue = ref(false);
</script>

<style lang="scss" scoped>
.table-row {
  @apply bg-primary text-white text-sm p-5 rounded-xl grid grid-cols-5;

  p {
    @apply rtl:border-l rtl:last:border-l-0 ltr:border-r ltr:last:border-r-0 px-7 border-white/20 flex items-center gap-2;
  }

  &--data {
    @apply bg-secondary/10 text-slate-900 my-3;

    p {
      @apply border-secondary rtl:border-l rtl:last:border-l-0 ltr:border-r ltr:last:border-r-0 px-7;
    }

    &--colored {
      @apply bg-primary/10;
    }
  }
}
</style>

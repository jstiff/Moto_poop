<script lang="ts">
  import { superForm } from "sveltekit-superforms/client";
  import { zodClient } from "sveltekit-superforms/adapters";
  import { motorcycleSchema } from "./schema.js";
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { Textarea } from "$lib/components/ui/textarea";
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";
  import { Separator } from "$lib/components/ui/separator";
  import { toast } from "svelte-sonner";
  import { Bike, Camera, MapPin, FileText, Sparkles } from "lucide-svelte";
  import { goto } from "$app/navigation";

  export let data;

  const { form, errors, enhance, submitting } = superForm(data.form, {
    validators: zodClient(motorcycleSchema),
    onUpdated({ form }) {
      if (form.valid) {
        toast.success("Motorcycle registered successfully!", {
          description: "You can now start logging maintenance records.",
        });
        goto("/motorcycles");
      }
    },
    onError({ result }) {
      toast.error("Registration failed", {
        description:
          result.error?.message ||
          "Please check your information and try again.",
      });
    },
  });

  // Motorcycle makes for dropdown
  const motorcycleMakes = [
    "BMW",
    "Ducati",
    "Harley-Davidson",
    "Honda",
    "Indian",
    "Kawasaki",
    "KTM",
    "Moto Guzzi",
    "Suzuki",
    "Triumph",
    "Yamaha",
    "Other",
  ];

  // Generate year options (current year back to 1980)
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1979 },
    (_, i) => currentYear - i
  );
</script>

<svelte:head>
  <title>Register Your Motorcycle | TrueMoto</title>
  <meta
    name="description"
    content="Register your motorcycle to start building your verifiable maintenance history"
  />
</svelte:head>

<div class="container mx-auto px-4 py-8 max-w-2xl">
  <!-- Header Section -->
  <div class="text-center mb-8">
    <div class="flex justify-center mb-4">
      <div class="bg-primary/10 p-3 rounded-full">
        <Bike class="h-8 w-8 text-primary" />
      </div>
    </div>
    <h1 class="text-3xl font-bold tracking-tight">Register Your Motorcycle</h1>
    <p class="text-muted-foreground mt-2">
      Start building your verifiable maintenance history and increase your
      bike's value
    </p>

    <!-- Benefits badges -->
    <div class="flex flex-wrap justify-center gap-2 mt-4">
      <Badge variant="secondary" class="flex items-center gap-1">
        <Sparkles class="h-3 w-3" />
        Increase Resale Value
      </Badge>
      <Badge variant="secondary" class="flex items-center gap-1">
        <FileText class="h-3 w-3" />
        Proof of Care System
      </Badge>
      <Badge variant="secondary" class="flex items-center gap-1">
        <Camera class="h-3 w-3" />
        Verifiable Records
      </Badge>
    </div>
  </div>

  <!-- Registration Form -->
  <Card class="shadow-lg">
    <CardHeader>
      <CardTitle class="flex items-center gap-2">
        <MapPin class="h-5 w-5 text-primary" />
        Motorcycle Details
      </CardTitle>
      <CardDescription>
        Provide accurate information to create your motorcycle's digital
        identity
      </CardDescription>
    </CardHeader>

    <CardContent>
      <form method="POST" use:enhance class="space-y-6">
        <!-- VIN Section -->
        <div class="space-y-2">
          <Label for="vin" class="text-sm font-semibold">
            VIN (Vehicle Identification Number) *
          </Label>
          <Input
            id="vin"
            name="vin"
            bind:value={$form.vin}
            placeholder="Enter 17-character VIN"
            maxlength="17"
            class="font-mono tracking-wider {$errors.vin
              ? 'border-destructive'
              : ''}"
            required
          />
          {#if $errors.vin}
            <p class="text-sm text-destructive">{$errors.vin}</p>
          {/if}
          <p class="text-xs text-muted-foreground">
            Usually found on the frame near the steering head or on your
            title/registration
          </p>
        </div>

        <Separator />

        <!-- Basic Info Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Make -->
          <div class="space-y-2">
            <Label for="make" class="text-sm font-semibold">Make *</Label>
            <select
              id="make"
              name="make"
              bind:value={$form.make}
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 {$errors.make
                ? 'border-destructive'
                : ''}"
              required
            >
              <option value="">Select Make</option>
              {#each motorcycleMakes as make}
                <option value={make}>{make}</option>
              {/each}
            </select>
            {#if $errors.make}
              <p class="text-sm text-destructive">{$errors.make}</p>
            {/if}
          </div>

          <!-- Model -->
          <div class="space-y-2">
            <Label for="model" class="text-sm font-semibold">Model *</Label>
            <Input
              id="model"
              name="model"
              bind:value={$form.model}
              placeholder="e.g. CBR600RR, Street Triple"
              class={$errors.model ? "border-destructive" : ""}
              required
            />
            {#if $errors.model}
              <p class="text-sm text-destructive">{$errors.model}</p>
            {/if}
          </div>

          <!-- Year -->
          <div class="space-y-2">
            <Label for="year" class="text-sm font-semibold">Year *</Label>
            <select
              id="year"
              name="year"
              bind:value={$form.year}
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 {$errors.year
                ? 'border-destructive'
                : ''}"
              required
            >
              <option value="">Select Year</option>
              {#each years as year}
                <option value={year}>{year}</option>
              {/each}
            </select>
            {#if $errors.year}
              <p class="text-sm text-destructive">{$errors.year}</p>
            {/if}
          </div>

          <!-- Current Mileage -->
          <div class="space-y-2">
            <Label for="current_mileage" class="text-sm font-semibold"
              >Current Mileage</Label
            >
            <Input
              id="current_mileage"
              name="current_mileage"
              type="number"
              bind:value={$form.current_mileage}
              placeholder="e.g. 15000"
              min="0"
              class={$errors.current_mileage ? "border-destructive" : ""}
            />
            {#if $errors.current_mileage}
              <p class="text-sm text-destructive">{$errors.current_mileage}</p>
            {/if}
            <p class="text-xs text-muted-foreground">
              Leave blank if unknown - you can update this later
            </p>
          </div>
        </div>

        <Separator />

        <!-- Description -->
        <div class="space-y-2">
          <Label for="description" class="text-sm font-semibold">
            Description (Optional)
          </Label>
          <Textarea
            id="description"
            name="description"
            bind:value={$form.description}
            placeholder="Add any additional details about your motorcycle (modifications, condition, etc.)"
            class="min-h-20 {$errors.description ? 'border-destructive' : ''}"
          />
          {#if $errors.description}
            <p class="text-sm text-destructive">{$errors.description}</p>
          {/if}
        </div>

        <!-- Info Card -->
        <Card class="bg-muted/50">
          <CardContent class="p-4">
            <div class="flex items-start gap-3">
              <div class="bg-primary/10 p-2 rounded-full mt-0.5">
                <Sparkles class="h-4 w-4 text-primary" />
              </div>
              <div class="space-y-1">
                <p class="text-sm font-medium">Why register with TrueMoto?</p>
                <p class="text-xs text-muted-foreground">
                  Once registered, you can start logging maintenance records
                  with photos and GPS verification. This creates an immutable
                  history that significantly increases your bike's resale value
                  and buyer confidence.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Submit Button -->
        <Button
          type="submit"
          disabled={$submitting}
          class="w-full h-12 text-base font-semibold"
        >
          {#if $submitting}
            <div class="flex items-center gap-2">
              <div
                class="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
              ></div>
              Registering...
            </div>
          {:else}
            <div class="flex items-center gap-2">
              <Bike class="h-4 w-4" />
              Register Motorcycle
            </div>
          {/if}
        </Button>
      </form>
    </CardContent>
  </Card>

  <!-- Next Steps Preview -->
  <Card class="mt-6 border-dashed">
    <CardHeader>
      <CardTitle class="text-lg">What's Next?</CardTitle>
    </CardHeader>
    <CardContent class="space-y-3">
      <div class="flex items-center gap-3 text-sm">
        <div
          class="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center font-semibold"
        >
          1
        </div>
        <span>Start logging your first maintenance record with photos</span>
      </div>
      <div class="flex items-center gap-3 text-sm">
        <div
          class="bg-muted text-muted-foreground rounded-full w-6 h-6 flex items-center justify-center font-semibold"
        >
          2
        </div>
        <span>Build your verifiable maintenance history over time</span>
      </div>
      <div class="flex items-center gap-3 text-sm">
        <div
          class="bg-muted text-muted-foreground rounded-full w-6 h-6 flex items-center justify-center font-semibold"
        >
          3
        </div>
        <span>List with confidence knowing your bike's full history</span>
      </div>
    </CardContent>
  </Card>
</div>
